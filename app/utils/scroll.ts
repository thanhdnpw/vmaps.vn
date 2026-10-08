// Cuộn mượt tới anchor bằng rAF + easing, thay cho scrollIntoView({ behavior: 'smooth' })
// (tốc độ tuỳ trình duyệt, quãng dài gần như nhảy). Trừ scroll-margin-top để không bị header che.

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

let frame = 0

export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const offset = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  const start = window.scrollY
  const end = Math.max(0, Math.min(
    target.getBoundingClientRect().top + start - offset,
    document.documentElement.scrollHeight - window.innerHeight
  ))
  const distance = end - start
  history.replaceState(history.state, '', `#${id}`)

  cancelAnimationFrame(frame)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(distance) < 1) {
    window.scrollTo(0, end)
    return
  }

  // 600–1200ms tuỳ quãng đường
  const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.25))
  // Người dùng tự cuộn giữa chừng thì dừng, không giành lại thanh cuộn
  const stop = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
  }
  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })

  const startTime = performance.now()
  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) frame = requestAnimationFrame(step)
    else stop()
  }
  frame = requestAnimationFrame(step)
}

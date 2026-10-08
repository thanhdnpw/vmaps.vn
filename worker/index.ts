// Worker đứng trước static assets: chỉ để chuyển www.vmaps.vn → vmaps.vn (301, giữ path + query).
// Mọi request khác trả thẳng file trong .output/public qua binding ASSETS.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.hostname === 'www.vmaps.vn') {
      url.hostname = 'vmaps.vn'
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  }
}

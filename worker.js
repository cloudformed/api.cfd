export default {
  fetch: async (req, env, ctx) => {
    const { pathname } = new URLPattern({pathname: '/foo/:image.jpg'}).exec(new URL(req.url))
    
    const headers = {
      authorization: req.headers.get('authorization')
    }
    
    return new Response(JSON.stringify({pathname}, null, 2))
  }
}

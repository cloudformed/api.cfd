export default {
  fetch: async (req, env, ctx) => {
    const pattern = new URLPattern({pathname: '/foo/:image.jpg'})
    const result = p.exec({pathname: '/foo/cat.jpg'})
    
    const headers = {
      authorization: req.headers.get('authorization')
    }
    
    return new Response(JSON.stringify({result}, null, 2))
  }
}

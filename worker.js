const githubAuthUrl = 'https://github.com/login/oauth/authorize?client_id=e4be34a79e43b4752209&redirect_uri=https://api.cfd/auth/callback&scope=read:user user:email&state=


export default {
  fetch: async (req, env, ctx) => {
    const { pathname } = new URLPattern({pathname: '/foo/:image.jpg'}).exec(new URL(req.url))
    
    const headers = {
      authorization: req.headers.get('authorization')
    }
    
    if(!headers.authorization) {
      const state = Crypto.randomUUID()
      ctx.waitUntil(env.USERS.set(state, req.cf, { type: 'json', expirationTtl: 600 }))
      return Response.redirect(githubAuthUrl + state, 302)
    }
    
    return new Response(JSON.stringify({pathname}, null, 2))
  }
}

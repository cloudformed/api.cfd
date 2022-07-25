export default {
  fetch: async (req, env, ctx) => {
    const headers = {
      authorization = req.headers.get('authorization')
    }
    return fetch('api.cf')
  }
}

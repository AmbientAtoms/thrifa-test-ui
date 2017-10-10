import auth from '@/plugins/auth'

export default {
  user: {},
  isAuthenticated: !!auth.getToken()
}

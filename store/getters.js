export default {
  token: state => state.auth.token,
  user: state => state.auth.user,
  check: state => !!state.auth.user,
  userVerifiesCheck: state => !!(state.auth.user.user_verifies && state.auth.user.user_verifies === 1),
  intended: state => state.auth.intended
}

export default ({ store, redirect }) => {
  if (store.getters.check) {
    return redirect('/')
  }
}

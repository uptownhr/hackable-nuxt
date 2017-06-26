export default function ({store, redirect}) {
  console.log('auth middleware', store.state)

  if (!store.state.current_user) return redirect('/login')
}

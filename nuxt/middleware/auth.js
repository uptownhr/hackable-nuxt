export default function ({store, app}) {
  console.log('auth middleware', store.state)
  const SSR = global.__VUE_SSR_CONTEXT__

  console.log(SSR)
}

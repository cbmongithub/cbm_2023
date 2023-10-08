import { SessionProvider } from 'next-auth/react'

import { Layout } from '../components'
import '../styles/globals.css'

const App = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default App

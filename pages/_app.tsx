import 'normalize.css'
import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Premium Transfer 33</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp

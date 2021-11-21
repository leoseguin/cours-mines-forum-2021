import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Cours Mines Nancy 2021</title>
      <meta name="description" content="Exercices de cours" />
      <meta name="keywords" content="cours, web, mines, html" />
      <meta name="author" content="Julien Blatecky" />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Cours Web Mines 2021" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost/" />
      <meta property="og:image" content="favicon.png" />
      <meta property="og:site_name" content="Cours Web Mines 2021" />
      <meta property="og:description" content="Description détaillée de cours Web Mines 2019" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

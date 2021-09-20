import Head from 'next/head'

// Components
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Morning News</title>
      </Head>

      <Header/>
     
    </>
  )
}

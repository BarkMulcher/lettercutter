import Head from 'next/head';
// import Main from 'next/main';
import { Inter } from '@next/font/google';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lettercutter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href={`${process.env.FAVICON}/favicon.ico`} /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <div>Something Interesting In Main Element</div>
      </main>
    </>
  )
}

export const getStaticProps = async (context) => {
  return {
    // data added inside props will be
    // received by page component as `props`
    props: {},
  };
}

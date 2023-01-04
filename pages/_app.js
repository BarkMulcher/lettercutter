// import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
// import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// import Head from 'next/head';
import Header from '../components/common/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

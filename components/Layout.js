
import Meta from '../components/Meta'
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      <div>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout

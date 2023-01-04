import Header from './Header';
import Navbarb from './navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <main>
          <Header />
          <Navbarb />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

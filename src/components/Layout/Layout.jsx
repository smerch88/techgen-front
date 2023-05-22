import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
export const Layout = () => {
  return (
    <>
      <Header />
      <main style={{flex: 1, display: 'grid', paddingTop: '50px'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

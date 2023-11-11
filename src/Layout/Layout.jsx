import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'Header/Header';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

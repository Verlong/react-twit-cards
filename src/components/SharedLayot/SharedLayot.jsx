import css from './SharedLayot.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <a className={css.navLink} to="/">
            Home
          </a>
          <a className={css.navLink} to="/tweets">
            Tweets
          </a>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

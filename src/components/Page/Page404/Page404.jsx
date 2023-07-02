import { Link } from 'react-router-dom';
import css from './Page404.module.css';

const Page404 = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>
        This page do not exist.
        <Link className={css.homeLink} to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default Page404;

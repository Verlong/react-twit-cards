import css from './Home.module.css';
import mainPic from '../../../img/usericon.png';
const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.wrappper}>
        <img className={css.mainPic} src={mainPic} alt="main pic" />
        <h1 className={css.title}>Tweet Cards App</h1>
      </div>
    </div>
  );
};

export default Home;

import css from './CardItem.module.css';
import logo from '../../img/logogoit.png';
import tweetpic from '../../img/tweetsimg.png';

const CardItem = () => {
  return (
    <div className={css.container}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.tweetPic} src={tweetpic} alt="tweets img" />

      <p className={css.title}>777 TWEETS</p>
      <p className={css.title}>FOLLOWERS</p>
      <button>FOLLOW</button>
    </div>
  );
};

export default CardItem;

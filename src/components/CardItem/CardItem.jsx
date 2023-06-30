import css from './CardItem.module.css';

const CardItem = () => {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img className={css.logoImg} src="../../img/logo-goit.png" alt="logo" />
        <img
          className={css.tweetsImg}
          src="../../img/tweet-picture.jpg"
          alt="tweets"
        />
        <img
          className={css.userIconImg}
          src="../../img/user-icon.png"
          alt="user icon"
        />
      </div>
      <p className={css.title}>777 TWEETS</p>
      <p className={css.title}>FOLLOWERS</p>
      <button className={css.followBtn}>FOLLOW</button>
    </div>
  );
};

export default CardItem;

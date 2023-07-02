import UsersList from '../../components/UsersList/UsersList';
import css from './TweetsPage.module.css';

const Tweets = () => {
  return (
    <div className={css.tweetCardList}>
      <UsersList />
    </div>
  );
};

export default Tweets;

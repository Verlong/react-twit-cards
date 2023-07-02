import { Button, Container, LogoImg, Title, TweetPic } from './CardItem.styled';
import logo from '../../img/logogoit.png';
import tweetpic from '../../img/tweetsimg.png';

const CardItem = () => {
  return (
    <Container>
      <LogoImg src={logo} alt="logo" />
      <TweetPic src={tweetpic} alt="tweets img" />

      <Title>777 TWEETS</Title>
      <Title>FOLLOWERS</Title>
      <Button>FOLLOW</Button>
    </Container>
  );
};

export default CardItem;

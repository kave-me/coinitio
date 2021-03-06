import { makeStyles } from '@material-ui/core';
import Card from './Card';
import shortid from 'shortid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tokenList } from '../../config';

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    paddingTop: '1rem',
  },
}));

const NavCard = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {tokenList.map((n: string) => (
          <Card tokenName={n} key={shortid.generate()} />
        ))}
      </Slider>
    </div>
  );
};

export default NavCard;

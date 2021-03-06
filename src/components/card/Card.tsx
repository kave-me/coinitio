import { Grid, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { green, red } from '@material-ui/core/colors';
import lineChartPic from '../../assets/images/lineChart.png';

const useStyles = makeStyles(() => ({
  container: {
    width: '300px',
    borderLeft: '2px dashed rgba(200,10,10,.3)',
  },
  arrowUp: {
    fill: green[500],
  },
  arrowDown: {
    fill: red[500],
  },
  miniChart: {
    display: 'flex',
    margin: '0 auto',
    paddingTop: '20px',
    width: '50px',
    height: 'auto',
  },
}));
type Coin = {
  name: string;
  symbol: string;
  price: number;
  imgUrl: string;
  priceChange24h: number;
};

interface CoinCardProps {
  tokenName: string;
}
const CoinCard = ({ tokenName = 'N/A' }: CoinCardProps) => {
  const [coin, setCoin] = useState<Coin>({
    name: 'undefined',
    symbol: 'NA',
    price: 0,
    imgUrl: 'broken link',
    priceChange24h: 0,
  });
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${tokenName}`)
      .then(r => {
        console.log(r);
        setCoin({
          name: r.data.name,
          symbol: r.data.symbol,
          price: r.data.market_data.current_price.usd,
          imgUrl: r.data.image.thumb,
          priceChange24h: r.data.market_data.price_change_24h_in_currency.usd,
        });
      })
      .catch(err => console.log(err));
  }, []);
  const styles = useStyles();
  return coin.name !== 'undefined' ? (
    <Grid justify={'center'} className={styles.container} container spacing={2}>
      <Grid item xs={6}>
        <CoinCardName name={coin.name} imgUrl={coin.imgUrl} symbol={coin.symbol} />
      </Grid>
      <Grid item xs={6}>
        <CoinCardMiniChart />
      </Grid>
      <Grid item xs={6}>
        <CoinCardPrice price={coin.price} />
      </Grid>
      <Grid item xs={6}>
        <CoinCardPriceChange24h change={coin.priceChange24h} />
      </Grid>
    </Grid>
  ) : (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  );
};

interface CoinCardNameProps {
  name: string;
  symbol: string;
  imgUrl: string;
}

const CoinCardName = ({
  name = 'undefined',
  imgUrl = 'broken link',
  symbol = 'NA',
}: CoinCardNameProps) => {
  return (
    <Grid container direction={'column'} alignItems={'center'} alignContent={'center'}>
      <img src={imgUrl} alt={`${name} icon`} />
      <p>{symbol.toUpperCase()}</p>
    </Grid>
  );
};

interface CoinCardPriceProps {
  price: number;
}

const CoinCardPrice = ({ price = 0 }: CoinCardPriceProps) => {
  return (
    <Grid justify={'center'} container alignContent={'center'} alignItems={'center'}>
      <Grid item>
        <Typography variant={'h6'}>${price.toFixed(2)}</Typography>
      </Grid>
    </Grid>
  );
};
const CoinCardMiniChart = () => {
  const styles = useStyles();
  // TODO: generate chart using react-chart library and history data
  return (
    <Grid container alignItems={'center'} alignContent={'center'} justify={'center'}>
      <Grid item>
        <img className={styles.miniChart} src={lineChartPic} />
      </Grid>
    </Grid>
  );
};

interface CoinCardPriceChange24h {
  change: number;
}

const CoinCardPriceChange24h = ({ change = 0 }: CoinCardPriceChange24h) => {
  const styles = useStyles();
  return (
    <Grid justify={'center'} container alignContent={'center'} alignItems={'center'}>
      {change >= 0 ? (
        <Grid item>
          <ArrowDropUpIcon className={styles.arrowUp} />
        </Grid>
      ) : (
        <Grid item>
          <ArrowDropDownIcon className={styles.arrowDown} />
        </Grid>
      )}
      <Grid item>
        <p>${change.toFixed(3)}</p>
      </Grid>
    </Grid>
  );
};

export default CoinCard;

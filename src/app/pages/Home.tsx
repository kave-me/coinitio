import { Divider, Grid, makeStyles } from '@material-ui/core';
import NavCard from '../../components/card/NavCard';
import TradingViewChart from '../../components/chart/TradingViewChart';
import SearchToken from '../../components/input/SearchToken';
import TokenList from '../../components/list/TokenList';
import Footer from '../../components/footer/Footer';

const useStyles = makeStyles(() => ({
  body: {
    width: '100%',
  },
  container: {
    marginTop: '10px',
    // background: 'linear-gradient(180deg,rgba(0,0,0,0) 80%, rgba(255,255,255,.2) 20%)',
    boxShadow: '1px 24px 58px 26px rgba(0,0,0,0.64)',
    overflow: 'hidden',
    borderRadius: '20px',
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.body}>
      <NavCard />
      <Grid container>
        <Grid item xs={2} />
        <Grid item className={styles.container} xs={8}>
          <TradingViewChart />
          <SearchToken />
          <Divider />
          <TokenList />
        </Grid>
        <Grid item xs={2} />
        <Footer />
      </Grid>
    </div>
  );
}

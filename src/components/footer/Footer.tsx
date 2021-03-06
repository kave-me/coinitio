import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: 'relative',
    overflow: 'hidden',
    marginTop: '6em',
    padding: '2em 0 ',
  },
  link: {
    fontSize: '1.25em',
    color: '#fff',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  copyright: {
    color: '#fff',
    fontSize: '1em',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {[
            { name: 'link1', link: 'test' },
            { name: 'link2', link: 'test' },
            { name: 'link3', link: 'test' },
          ].map(({ name, link }) => (
            <Grid item key={link}>
              <a href={link}>
                <Typography color={'textPrimary'}>{name}</Typography>
              </a>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          container
          component={'a'}
          target="_blank"
          rel="noreferrer noopener"
          href="https://satoruakiyama.com"
          justify="center"
          style={{
            textDecoration: 'none',
          }}
        >
          <Typography className={classes.copyright}>&copy;Coinito</Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

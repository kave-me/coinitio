import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // maxWidth: 752,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);

function generate(element: React.ReactElement) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function TokenList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            {generate(
              <>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SentimentVerySatisfiedIcon color={'action'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={'Bitcoin'} secondary={'$57231.38'} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="show chart">
                      <ShowChartIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>,
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

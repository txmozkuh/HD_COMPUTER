import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import './index.scss';
import HotProductView from './HotProductView';
import HotNewsView from './HotNewsView';

const useStyles = makeStyles((theme) => ({
}));

const HotAreaView = () => {
  const classes = useStyles();

  return (

    <Grid container direction="row" justify="space-around" alignItems="flex-start" className="hotArea" spacing={3}>
      <Grid
        item
        xl={9}
        lg={9}
        md={9}
        xs={12}
      >
        <HotProductView className="hotArea__pro" />
      </Grid>
      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        xs={false}
      >
        <HotNewsView className="hotArea__news" />
      </Grid>
    </Grid>

  );
};

export default HotAreaView;

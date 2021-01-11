import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

import tempData from './data';
import ProdIntro from './ProdInfoDetail/ProdIntro';
import ProdTabs from './ProdInfoDetail/ProdTabs';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProdInfo = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
      <ProdIntro data={data} />
      <ProdTabs data={data} />
    </Grid>
  );
};

export default ProdInfo;

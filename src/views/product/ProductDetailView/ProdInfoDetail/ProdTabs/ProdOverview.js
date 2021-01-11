import React, { useState } from 'react';
import {
  Grid,
  Hidden,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'lightred'
  },
}));

const ProdOverview = () => {
  const classes = useStyles();

  return (<div className={classes.root}>ProdOverview</div>);
};

export default ProdOverview;

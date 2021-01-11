import React, { useState } from 'react';
import {
  Grid,
  Hidden,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'blue'
  },
}));

const ProdTabs = () => {
  const classes = useStyles();

  return (<div className={classes.root}>ProdTabs</div>);
};

export default ProdTabs;

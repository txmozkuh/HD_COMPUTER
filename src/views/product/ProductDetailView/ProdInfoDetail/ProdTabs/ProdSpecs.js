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

const ProdSpecs = () => {
  const classes = useStyles();

  return (<div className={classes.root}>ProdSpecs</div>);
};

export default ProdSpecs;

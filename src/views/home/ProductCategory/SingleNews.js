/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Grid, Typography,
  makeStyles
} from '@material-ui/core';
import './SingleNews.scss';

const useStyles = makeStyles((theme) => ({
}));

const SingleNews = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" {...props} className="singleNews">
      <img src="https://tinhocanhphat.vn/media/lib/pcgaming-min.jpg" alt="1" />
    </Grid>

  );
};

export default SingleNews;

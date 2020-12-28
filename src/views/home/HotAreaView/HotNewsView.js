/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Grid, Typography,
  makeStyles
} from '@material-ui/core';
import './HotNewsView.scss';

const useStyles = makeStyles((theme) => ({
}));

const HotNewsView = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" {...props} className="hotNewsView">
      <Typography className="hotNewsView__title">
        Tin tức nổi bật
      </Typography>

      <Grid className="hotNewsView__item" container direction="column" justify="flex-start" alignItems="center">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => <NewsCard key={`newscard_${idx}`} />)}
      </Grid>
    </Grid>

  );
};

const NewsCard = (props) => {
  return (
    <Grid container direction="row" wrap="nowrap" className="newsCard">
      <img src={require('./newsImg/1.jpg')} alt="1" />
      <p className="desc">
        » RTX 3000 Seri Hữu Ích Như Thế Nào Cho Quá ...
        (25-10-2020, 10:36 am)
      </p>
    </Grid>
  );
};

export default HotNewsView;

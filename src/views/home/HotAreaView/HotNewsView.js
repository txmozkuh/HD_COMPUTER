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
    <Grid container direction="row" wrap="nowrap" justify="space-between" alignItems="center" className="newsCard">
      <Grid item xs={6} md={6} lg={6} alignContent="center">
        <img className="newsCard__img" src={require('./newsImg/1.jpg')} alt="1" />
      </Grid>
      <Grid item xs={6} md={6} lg={6} alignContent="center">
        <p className="newsCard__p">
          » RTX 3000 Seri Hữu Ích Như Thế Nào Cho Quá ...
          <br />
          (25-10-2020, 10:36 am)
        </p>
      </Grid>
    </Grid>
  );
};

export default HotNewsView;

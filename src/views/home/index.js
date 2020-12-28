import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import clsx from 'clsx';
import './index.scss';
import BannerView from './BannerView/BannerView';
import HotAreaView from './HotAreaView';
import ProductCategoryView from './ProductCategoryView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page
      className={clsx(classes.root, 'home')}
      title="Home"
    >
      <Container maxWidth={false}>
        <Grid container direction="column" wrap="nowrap" justify="flex-start" alignItems="center">
          <BannerView />
          <HotAreaView />
          <ProductCategoryView />
        </Grid>
      </Container>
    </Page>
  );
};

export default Home;

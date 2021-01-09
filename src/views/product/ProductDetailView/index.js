import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import tempData from './data';

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

const ProductDetail = () => {
  const classes = useStyles();
  const [data] = useState(tempData[0]);

  console.log('xxx562 product detail: ', data);
  return (
    <Page
      className={classes.root}
      title="Product Detail"
    >
      <Container maxWidth={false}>
        abc
      </Container>
    </Page>
  );
};

export default ProductDetail;

/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import Product from 'src/components/Product/Product';
import './ProductList.scss';
import { FAKE_PROD } from 'src/utils/constants';

const useStyles = makeStyles((theme) => ({
}));

const ProductList = (props) => {
  const classes = useStyles();
  let { data } = props;
  if (!data) {
    data = Array.from({ length: Math.floor(Math.random() * 5 + 5) }, (_, index) => index + 1)
      .map((_) => FAKE_PROD);
  }

  return (
    <Grid className="productList" container direction="row" justify="flex-start" alignItems="center">
      {data.map((product, idx) => <Product key={`product__${idx}`} data={product} />)}
    </Grid>
  );
};

export default ProductList;

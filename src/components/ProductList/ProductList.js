/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import Product from '../Product/Product';

import './ProductList.scss';

const useStyles = makeStyles((theme) => ({
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Grid className="productList" container direction="row" justify="flex-start" alignItems="center">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((product, idx) => <Product key={`product__${idx}`} />)}
    </Grid>
  );
};

export default ProductList;

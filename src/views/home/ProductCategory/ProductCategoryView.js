import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import './ProductCategoryView.scss';
import { AiOutlineDoubleRight as DoubleArrowIcon } from 'react-icons/ai';
import ProductList from 'src/components/ProductList/ProductList';
import clsx from 'clsx';
import SingleNews from './SingleNews';

const useStyles = makeStyles((theme) => ({

}));

const ProductCategoryView = () => {
  const classes = useStyles();

  return (
    <div className="proCaView">
      <Grid className="proCaView__bar proCaViewBar" container direction="row" justify="flex-start" alignItems="flex-start">
        <div className=" proCaViewBar__title">
          Máy tính để bàn
        </div>
        <div className="proCaViewBar__category">
          Máy tính chơi game
        </div>
        <div className="proCaViewBar__category">
          Máy tính chơi game cũ (2nd)
        </div>
        <div className="proCaViewBar__category">
          Máy tính đồ họa
        </div>
        <div className="proCaViewBar__category">
          Máy tính văn phòng
        </div>

        <div className="proCaViewBar__category end-div">
          Xem tất cả
          <DoubleArrowIcon className="end-div__icon" />
        </div>
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" className="proCaView__content proCaViewContent">
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          xs={false}
          className=" proCaViewContent__news"
        >
          <SingleNews />
        </Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          xs={12}
          className=" proCaViewContent__prod"
        >
          <ProductList />
        </Grid>
      </Grid>
    </div>

  );
};

export default ProductCategoryView;

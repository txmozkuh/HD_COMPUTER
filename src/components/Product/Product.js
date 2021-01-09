import React, { useState } from 'react';
import {
  Box,
  Card,
  makeStyles
} from '@material-ui/core';
import { GiCheckMark as CheckIcon } from 'react-icons/gi';
import { IoMdCart as CartIcon } from 'react-icons/io';
import './Product.scss';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
}));

const Product = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const productCode = 'PWTS0001';
  return (

    <Card className="product" raised onClick={() => navigate('product-url')}>
      <div className="product__code">
        Mã SP:
        {' '}
        {productCode}
      </div>
      <div className="product__img productImg">
        <img className="productImg__img" src="https://www.maytinhxachtayus.com/wp-content/uploads/2020/02/1.png" alt="product" />
        <div className="productImg__price">
          20.000
        </div>
      </div>
      <div className="product__info">PC Đồ Họa AP Ryzen 5 -5600X Ram 8Gb VGA GTX 1650 4Gb Case Trio</div>
      <div className="product__status productStatus">
        <div className="productStatus__status">
          <CheckIcon />
          Còn hàng
        </div>
        <div className="productStatus__addToCart">
          <CartIcon />
          CHO VÀO GIỎ
        </div>
      </div>
    </Card>

  );
};

export default Product;

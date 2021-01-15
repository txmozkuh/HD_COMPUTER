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
import { FAKE_PROD } from 'src/utils/constants';

const useStyles = makeStyles((theme) => ({
}));

const Product = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  let { data } = props;
  if (!data) {
    data = FAKE_PROD;
  }

  const {
    id, code, price, imageUrl, name, url
  } = data;
  return (

    <Card id={id} className="product" raised onClick={() => navigate(`/${url}`)}>
      <div className="product__code">
        Mã SP:
        {' '}
        {code}
      </div>
      <div className="product__img productImg">
        <img className="productImg__img" src={imageUrl} alt="a latop" />
        <div className="productImg__price">
          {price}
        </div>
      </div>
      <div className="product__info">{name}</div>
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

import {
  Grid,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import NavCategory from './NavCategory';
import './NavHeader.scss';

const useStyles = makeStyles(({
  root: {
  },

}));

const NavHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className={clsx(classes.root, className, 'navHeader')}
      {...rest}
    >
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        xs={4}
      >
        <NavCategory />
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={8}
        xs={8}
        container
        direction="row"
        justify="space-around"
        alignContent="center"
      >
        {/* <div> */}
        <a href="/chinh-sach-hang-chinh-hang.html">
          <img src="/static/icons/new_icon_chinhhang.png" alt="" />
          100% chính hãng
        </a>
        {/* </div> */}
        <a href="/chinh-sach-van-chuyen.html">
          <img src="/static/icons/new_icon_vanchuyen.png" alt="" />
          Miễn phí vận chuyển
        </a>
        <a href="/chinh-sach-bao-hanh.html">
          <img src="/static/icons/new_icon_baohanh.png" alt="" />
          Bảo hành tận nơi
        </a>
        <a href="/huong-dan-mua-hang-tra-gop.html">
          <img src="/static/icons/new_icon_tragop.png" alt="" />
          Hướng dẫn trả góp
        </a>
      </Grid>
    </Grid>
  );
};

NavHeader.propTypes = {
  className: PropTypes.string
};

export default NavHeader;

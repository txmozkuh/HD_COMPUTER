import {
  Button,
  Grid,
  IconButton,
  makeStyles, TextField, Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Search as SearchIcon, ShoppingCart as CardIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import SearchArea from 'src/components/SearchArea/SearchArea';
import './MainHeader.scss';
import NavCategory from './NavCategory';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  iconButton: {
    padding: 10,
  },
  searchBtn: {
    alignSelf: 'center'
  },
  hideEl: {
    display: 'none'
  }
}));

const EVENT_GRID_EL = {
  hide: {
    search: {
      xl: 5,
      lg: 5,
      md: 5,
      sm: 8,
      xs: 12,
    },
    phone: {
      xl: 3,
      lg: 3,
      md: 3,
      sm: 6,
      xs: 6,
    },
    cart: {
      xl: 2,
      lg: 2,
      md: 2,
      sm: 6,
      xs: 6,
    },
    category: {
      xl: 2,
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
    },
  },
  show: {
    logo: {
      xl: 2,
      lg: 2,
      md: 2,
      sm: 4,
      xs: 4,
    },
    search: {
      xl: 5,
      lg: 5,
      md: 5,
      sm: 8,
      xs: 8,
    },
    phone: {
      xl: 3,
      lg: 3,
      md: 3,
      sm: 8,
      xs: 8,
    },
    cart: {
      xl: 2,
      lg: 2,
      md: 2,
      sm: 4,
      xs: 4,
    },
    category: {
      xl: 4,
      lg: 4,
      md: 4,
      sm: 4,
      xs: 12,
    }
  }
};

const MainHeader = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { className, isHidding, ...rest } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={clsx(classes.root, className, 'mainHeader')}
      {...rest}
    >
      <Grid
        item
        {... EVENT_GRID_EL[isHidding ? 'hide' : 'show'].logo}
        container
        justify="center"
        alignItems="center"
        className={`${isHidding ? classes.hideEl : ''}`}
      >
        <div onClick={() => navigate('/')}>
          <img alt="main-logo" src="/static/icons/logo.png" height={65} />
        </div>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignContent="center"
        className="mainHeader__search"
        {... EVENT_GRID_EL[isHidding ? 'hide' : 'show'].search}
      >
        <SearchArea />
      </Grid>
      <Grid
        item
        {... EVENT_GRID_EL[isHidding ? 'hide' : 'show'].phone}
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={clsx('mainHeader__phoneInfo')}
      >
        <Grid>
          <Typography>Mua hàng Online:</Typography>
        </Grid>
        <Grid>
          <Typography className="phone"> 090.12.34.567 </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        {... EVENT_GRID_EL[isHidding ? 'hide' : 'show'].cart}
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={clsx('mainHeader__cart cart')}
      >
        <Button className="cart__btn" startIcon={<CardIcon className="cardIcon" />}>
          Giỏ hàng
        </Button>
      </Grid>
      <div className="line-break" />
      <Grid
        item
        className={`mainHeader__nav ${isHidding ? 'set-first-order' : ''}`}
        {... EVENT_GRID_EL[isHidding ? 'hide' : 'show'].category}
      >
        <NavCategory />
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={8}
        sm={8}
        xs={12}
        className={`mainHeader__intro ${isHidding ? classes.hideEl : ''}`}
      >
        <IntroHeader />
      </Grid>

    </Grid>
  );
};

const IntroHeader = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignContent="center"
      className="intro-header"
    >
      <a href="/chinh-sach-hang-chinh-hang.html">
        <img src="/static/icons/new_icon_chinhhang.png" alt="" />
        100% chính hãng
      </a>
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
  );
};

MainHeader.propTypes = {
  className: PropTypes.string
};

export default MainHeader;

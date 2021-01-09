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
  }
}));

const MainHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={clsx(classes.root, className, 'mainHeader')}
      {...rest}
    >
      <Grid
        item
        xl={2}
        lg={2}
        md={4}
        xs={4}
        container
        justify="center"
        alignItems="center"
      >
        <Grid>
          <img alt="main-logo" src="/static/icons/lap_icon.png" height={65} />
        </Grid>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={8}
        xs={8}
        container
        direction="row"
        justify="center"
        alignContent="center"
        className="mainHeader__search"
      >
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          xs={8}
        >
          <TextField
            placeholder="Gõ từ khóa tìm kiếm"
            variant="outlined"
            color="primary"
            type="search"
            fullWidth
          />
        </Grid>
        <Grid className={clsx(classes.searchBtn)}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        xl={3}
        lg={3}
        md={8}
        xs={8}
        container
        direction="row"
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
        xl={1}
        lg={1}
        md={4}
        xs={4}
        container
        direction="row"
        alignItems="center"
        justify="flex-end"
        className={clsx('mainHeader__cart cart')}
      >
        <Button className="cart__btn" startIcon={<CardIcon className="cardIcon" />}>
          Giỏ hàng
        </Button>
      </Grid>
      <div className="line-break" />
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        xs={false}
      >
        <NavCategory />
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={false}
        xs={false}
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

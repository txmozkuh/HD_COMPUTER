import {
  AppBar,
  Grid,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import IconSell from 'src/assests/icons/new_icon_banhang.png';
import IconNews from 'src/assests/icons/new_icon_tintuc.png';
import './TopBar.scss';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    minHeight: 34
  },
  typo: {
    fontSize: 12,
    color: 'white',
    '&:hover, &:focus': {
      color: 'red',
      cursor: 'pointer'
    },
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container direction="row">
          <Grid
            item
            xl={10}
            lg={10}
            md={10}
            xs={12}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              {/* <RouterLink to="/"> */}
              <Typography className={classes.typo}>Hệ thống showroom</Typography>
              {/* </RouterLink> */}
            </Grid>
            <Grid item>
              <Grid container space={3} direction="row" wrap="nowrap" alignItems="center">
                <Grid>
                  <Icon className="topBarIcon"><img height={12} src={IconSell} alt="icon-ban-hang" /></Icon>
                </Grid>
                <Grid>
                  <Typography className={classes.typo}>Bán hàng trực tuyến</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container space={3} direction="row" wrap="nowrap" alignItems="center">
                <Grid>
                  <Icon className="topBarIcon"><img height={12} src={IconNews} alt="icon-tin-tuc" /></Icon>
                </Grid>
                <Grid>
                  <Typography className={classes.typo}>Tin nổi bật</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.typo}>Fanpage</Typography>
            </Grid>
            <Grid item className="redText">
              <Typography className={clsx(['redText', classes.typo])}>BUILD PC</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo}>THU MUA LINH KIỆN MÁY TÍNH CŨ</Typography>
            </Grid>
            <Grid item className="redText">
              <Typography className={clsx([classes.typo, 'redText'])}>KHUYẾN MÃI HOT</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            xs={12}
            container
            justify="flex-end"
            alignItems="center"
          >
            <Grid>
              Đăng ký/Đăng nhập
            </Grid>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;

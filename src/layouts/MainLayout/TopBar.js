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

import './TopBar.scss';

const useStyles = makeStyles(({
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
    <Grid container direction="row" {...rest}>
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
              <Icon className="topBarIcon"><img height={12} src="/static/icons/new_icon_banhang.png" alt="icon-ban-hang" /></Icon>
            </Grid>
            <Grid>
              <Typography className={classes.typo}>Bán hàng trực tuyến</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container space={3} direction="row" wrap="nowrap" alignItems="center">
            <Grid>
              <Icon className="topBarIcon"><img height={12} src="/static/icons/new_icon_tintuc.png" alt="icon-tin-tuc" /></Icon>
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
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;

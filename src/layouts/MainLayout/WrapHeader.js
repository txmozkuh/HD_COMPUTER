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
import MainHeader from './MainHeader';
import NavHeader from './NavHeader';
import TopBar from './TopBar';

import './WrapHeader.scss';

const useStyles = makeStyles(({
  root: {
  },
  topbar: {
    minHeight: 34
  },
}));

const WrapHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className, 'wrapHeader')}
      elevation={0}
      {...rest}
    >
      <Toolbar className={clsx(classes.topbar, 'wrapHeader__topbar')}>
        <TopBar />
      </Toolbar>
      <Toolbar className={clsx('wrapHeader__main')}>
        <MainHeader />
      </Toolbar>
      <Toolbar className={clsx('wrapHeader__nav')}>
        <NavHeader />
      </Toolbar>
    </AppBar>
  );
};

WrapHeader.propTypes = {
  className: PropTypes.string
};

export default WrapHeader;

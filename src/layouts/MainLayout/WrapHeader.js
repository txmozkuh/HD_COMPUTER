import {
  makeStyles
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
    // margin: 'auto'
    // position: 'relative'
  },
  topBar: { },
  mainHeader: {
    // position: 'relative',
    // margin: 'auto'
  },
  navHeader: {
    backgroundColor: '#eee'
  }
}));

const WrapHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <TopBar className={classes.topBar} />
      <div style={{ clear: 'both' }} />
      <div style={{ position: 'relative' }}>
        <MainHeader className={classes.mainHeader} />
        <NavHeader className={classes.navHeader} />
      </div>

    </div>
  );
};

WrapHeader.propTypes = {
  className: PropTypes.string
};

export default WrapHeader;

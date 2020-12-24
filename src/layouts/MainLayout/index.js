import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import WrapHeader from './WrapHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    minHeight: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    // paddingTop: 32
  },
  contentContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1 1 auto',
    overflow: 'auto'
  },
  content: {
    flex: '1 1 auto',
    overflow: 'auto'
  }
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WrapHeader />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

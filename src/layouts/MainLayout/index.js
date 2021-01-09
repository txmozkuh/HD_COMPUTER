import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
  const [headerHeight, setHeaderHeight] = useState(150);

  useEffect(() => {
    const height = document.getElementById('wrapHeader').clientHeight;
    console.log('xxx260 height top: ', height);
    setHeaderHeight(height);
  }, []);

  return (
    <div className={classes.root}>
      <WrapHeader id="wrapHeader" />
      <div className={classes.wrapper} style={{ marginTop: headerHeight }}>
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

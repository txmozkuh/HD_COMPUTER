import {
  AppBar,
  Toolbar
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/styles';
import MainHeader from './MainHeader';
import TopBar from '../TopBar';

import './WrapHeader.scss';

const DEFAULT_HEADER_HEIGHT = 34;

const styles = {
  root: {
  },
  topbar: {
    minHeight: 34,
  },
  show: {
    // transform: 'translate(0, 0)',
    transition: 'transform .5s',
  },
  hide: {
    // transform: 'translate(0, -150px)',
    transition: 'transform .5s',
  },
};

class WrapHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: true,
    };

    this.lastScroll = null;

    // this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currLastScroll = window.scrollY;
    const { shouldShow } = this.state;

    if (currLastScroll === this.lastScroll) {
      return;
    }

    const isShouldShow = this.lastScroll !== null ? currLastScroll < this.lastScroll : null;

    if (isShouldShow !== shouldShow) {
      this.setState((prevState) => ({
        ...prevState,
        shouldShow: isShouldShow,
      }));
    }

    this.lastScroll = currLastScroll;
  }

  getScrollClassName() {
    const { shouldShow } = this.state;
    const { classes: { show, hide } } = this.props;
    if (shouldShow === null) {
      return '';
    }

    return shouldShow
      ? show
      : hide;
  }

  render() {
    const { classes, id } = this.props;
    const { shouldShow } = this.state;

    // console.log('xxx560 wrap header: ', this.props);
    return (
      <AppBar
        className={clsx(classes.root, 'wrapHeader')}
        elevation={0}
        // style={{ height: !shouldShow ? DEFAULT_HEADER_HEIGHT : '' }}
        id={id}
      >
        <Toolbar className={clsx(classes.topbar, 'wrapHeader__topbar')}>
          <TopBar />
        </Toolbar>
        <Toolbar className={clsx('wrapHeader__main', this.getScrollClassName())}>
          <MainHeader isHidding={!shouldShow} />
        </Toolbar>
      </AppBar>
    );
  }
}

WrapHeader.propTypes = {
};

export default withStyles(styles)(WrapHeader);

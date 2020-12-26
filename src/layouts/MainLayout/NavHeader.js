import {
  Grid,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  },

}));

const NavHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      {...rest}
    >
      Danh muc sp | Chinh hang | Free van chuyen | Bao hanh | HD tra gop
    </Grid>
  );
};

NavHeader.propTypes = {
  className: PropTypes.string
};

export default NavHeader;

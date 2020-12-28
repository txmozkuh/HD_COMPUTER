import React from 'react';
import {
  makeStyles,
  Menu,
  MenuItem,
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';

import './NavCategory.scss';

const useStyles = makeStyles(({
}));

const NavCategory = ({ className }) => {
  return (
    <Grid container justify="center">
      <div>Danh mục sản phẩm</div>
      <Menu open={false}>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>

      </Menu>
    </Grid>
  );
};

NavCategory.propTypes = {
  className: PropTypes.string
};

export default NavCategory;

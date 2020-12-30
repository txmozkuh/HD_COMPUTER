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

const NavCategory = (props) => {
  return (
    <Grid className="nav-category" container justify="center">
      <div className="menu">
        <div className="menu__title">Danh mục sản phẩm</div>
        <SubMenu />
      </div>

    </Grid>
  );
};

const SubMenu = (props) => {
  return (
    <ul className="submenu">
      <li className="submenu__item ">
        <a>Our Company</a>
      </li>
      <li className="submenu__item ">
        <a>Our Team</a>
      </li>
      <li className="submenu__item ">
        <a>Our Portfolio</a>
      </li>
    </ul>
  );
};

NavCategory.propTypes = {
  className: PropTypes.string
};

export default NavCategory;

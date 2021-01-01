import React from 'react';
import {
  makeStyles,
  Menu,
  MenuItem,
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { HiOutlineDesktopComputer as PcIcon, } from 'react-icons/hi';
import { IoIosLaptop as OfficeLaptopIcon } from 'react-icons/io';

import './NavCategory.scss';
import ImgIcon from 'src/icons/ImgIcon';

const useStyles = makeStyles(({
}));

const SubMenuItem = [

];

const NavCategory = ({ className }) => {
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
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="computer" size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy tính để bàn
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <OfficeLaptopIcon size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy tính văn phòng
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="workstation" size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy chủ - máy trạm
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="linh-kien" size={25} />
          </span>
          <span className="sub-item-title__title">
            Linh kiện máy tính
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="monitor" size={25} />
          </span>
          <span className="sub-item-title__title">
            Màn hình máy tính
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="headphones" size={25} />
          </span>
          <span className="sub-item-title__title">
            Thiết bị, phụ kiện
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="fan" size={25} />
          </span>
          <span className="sub-item-title__title">
            Tản nhiệt - Cooling
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
      <li className="submenu__item submenu-item">
        <a className="submenu-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="chair" size={25} />
          </span>
          <span className="sub-item-title__title">
            Bán ghế chơi game
          </span>
        </a>
        {/* <div className="submenu-item__content">abc</div> */}
      </li>
    </ul>
  );
};

NavCategory.propTypes = {
  className: PropTypes.string
};

export default NavCategory;

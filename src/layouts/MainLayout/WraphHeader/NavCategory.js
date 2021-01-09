/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import {
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { IoIosLaptop as OfficeLaptopIcon } from 'react-icons/io';

import './NavCategory.scss';
import ImgIcon from 'src/icons/ImgIcon';

const NavCategory = (props) => {
  return (
    <Grid className="nav-category" container justify="center">
      <div className="menu">
        <div className="menu__title">Danh mục sản phẩm</div>
        <MenuItems />
      </div>

    </Grid>
  );
};

const SubItem = [
  { title: 'Máy tính chơi game ', items: [{ name: 'PC Gaming cũ', url: '#' }, { name: 'PC Gaming mới', url: '#' }, { name: 'PC Gaming Cao Cao', url: '#' }, { name: 'PC Gaming cũ', url: '#' }] },
  { title: 'PC Gaming Theo CPU  ', items: [{ name: 'PC Gaming Pentium', url: '#' }, { name: 'PC Gaming Ryzen 7', url: '#' }, { name: 'PC Gaming Cao Cao', url: '#' }] },
  { title: 'Máy tính chơi game ', items: [{ name: 'PC Gaming cũ', url: '#' }, { name: 'PC Gaming mới', url: '#' }, { name: 'PC Gaming Cao Cao', url: '#' }, { name: 'PC Gaming cũ', url: '#' }, { name: 'PC Gaming cũ', url: '#' }] },
  { title: 'Máy tính chơi game ', items: [{ name: 'PC Gaming cũ', url: '#' }, { name: 'PC Gaming mới', url: '#' }, { name: 'PC Gaming Cao Cao', url: '#' }] },
  { title: 'PC Gaming Theo CPU  ', items: [{ name: 'PC Gaming Pentium', url: '#' }, { name: 'PC Gaming Ryzen 7', url: '#' }, { name: 'PC Gaming Cao Cao', url: '#' }] }
];

const SubMenu = (props) => {
  const { data } = props;

  return (
    <Grid
      className="sub"
      container
      direction="row"
      wrap="wrap"
      justify="flex-start"
      alignContent="flex-start"
    >
      {
        data && data.map((subItem, idx) => {
          const { title, items } = subItem;
          return (
            <Grid
              item
              xl={3}
              lg={3}
              md={4}
              xs={6}
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              key={`submenu__${idx}`}
              className="sub-items"
            >
              <div className="sub-items__title">{title}</div>
              <ul className="sub-items__item">
                {items && items.map((item, idx2) => <li key={`item-url__${idx2}`}><a href={item.url}>{item.name}</a></li>)}
              </ul>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

const MenuItems = () => {
  return (
    <ul className="menu-items" id="menu-items">
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="computer" size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy tính để bàn
          </span>
        </a>
        <div className="menu-items-item__content sub-item-content">
          <SubMenu data={SubItem} />
        </div>
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <OfficeLaptopIcon size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy tính văn phòng
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="workstation" size={25} />
          </span>
          <span className="sub-item-title__title">
            Máy chủ - máy trạm
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="linh-kien" size={25} />
          </span>
          <span className="sub-item-title__title">
            Linh kiện máy tính
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="monitor" size={25} />
          </span>
          <span className="sub-item-title__title">
            Màn hình máy tính
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="headphones" size={25} />
          </span>
          <span className="sub-item-title__title">
            Thiết bị, phụ kiện
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="fan" size={25} />
          </span>
          <span className="sub-item-title__title">
            Tản nhiệt - Cooling
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
      <li className="menu-items__item menu-items-item">
        <a className="menu-items-item__title sub-item-title">
          <span className="sub-item-title__icon">
            <ImgIcon name="chair" size={25} />
          </span>
          <span className="sub-item-title__title">
            Bán ghế chơi game
          </span>
        </a>
        {/* <div className="menu-items-item__content">abc</div> */}
      </li>
    </ul>
  );
};

NavCategory.propTypes = {
};

export default NavCategory;

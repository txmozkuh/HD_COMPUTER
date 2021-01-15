/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Tabs, Tab, Typography, Box
} from '@material-ui/core';
import clsx from 'clsx';

import './ProdTabs.scss';
import { useNavigate } from 'react-router-dom';

const TABS = [
  { label: 'Đặc điểm nổi bật', id: 'dac-diem-noi-bat' },
  { label: 'Thông số kỹ thuật', id: 'thong-so-ky-thuat' },
  { label: 'Hình ảnh', id: 'hinh-anh' },
  { label: 'Video', id: 'video' },
  { label: 'Đánh giá', id: 'danh-gia' },
  { label: 'Tư vấn & bán hàng qua Facebook', id: 'tu-ban-ban-hang-fb' },
  { label: 'Sản phẩm liên quan', id: 'san-pham-lien-quan' }
];

function TabPanel(props) {
  const {
    className, children, label, ...other
  } = props;

  return (
    <div
      className={clsx(className, 'tabcontent')}
      {...other}
    >
      <Box p={1}>
        <h2 className="tabcontent__title">{label}</h2>
        <div className="tabcontent__content">
          {children}
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ProdTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(TABS[0].id);
  const { data } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.location.replace(`#${newValue}`);
  };

  return (
    <div className={clsx(classes.root, 'prod-tabs')}>
      <Tabs
        textColor="primary"
        className="appbar-tabs"
        value={value}
        onChange={handleChange}
        aria-label="product detail tabs"
        scrollButtons="auto"
        variant="scrollable"
      >
        {TABS.map((tab, idx) => (<Tab key={`tab_${idx}`} className="appbar-tabs__item" label={tab.label} value={tab.id} />))}
      </Tabs>
      {TABS.map((tab, idx) => (
        <TabPanel
          className="prod-tabs__panel"
          key={`tabpanel_${idx}`}
          id={tab.id}
          label={tab.label}
        >
          content of tab
        </TabPanel>
      ))}
    </div>
  );
}

export default ProdTabs;

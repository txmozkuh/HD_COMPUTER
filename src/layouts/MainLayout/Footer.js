import {
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import './Footer.scss';

const useStyles = makeStyles(({
  root: {},
}));

const Footer = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <footer className="footer">This is footer</footer>
      <p>
        WEBSITE ĐƯỢC SỞ HỮU VÀ QUẢN LÝ BỞI NGUYỄN VAN A
        <br />
        Giấy phép đăng ký kinh doanh số 012345678 do sở Kế Hoạch
        và Đầu Tư Thành phố Hồ Chí Minh cấp ngày 1/1/2020
      </p>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;

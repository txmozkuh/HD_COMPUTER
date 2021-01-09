import {
  Button,
  Grid,
  makeStyles,
  TextField
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
      <footer className="footer">
        <Grid container direction="row" justify="space-around" alignItems="flex-start" className="footer__info">
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            xs={6}
            className="footer__info__item"
          >
            <h3>Liên hệ</h3>
            <ul>
              <li>
                <a href="#">
                  <b>Địa Chỉ 1</b>
                  : ABC - Số 1 CDE, P.1, Q.2, TP. HCM
                </a>
              </li>

              <li>
                <a href="#">
                  <b>Điện Thoại</b>
                  {' '}
                  : 01324952342
                </a>
              </li>
              <li>
                <a href="mailto:abc@gmail.com">
                  <b>Email</b>
                  : abc@gmail.com
                </a>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            xs={6}
            className="footer__info__item"

          >
            <h3>TÀI KHOẢN NGÂN HÀNG</h3>
            <ul>
              <li><b>Ngân Hàng Vietcombank - Chi nhánh ABC</b></li>
              <li>
                Sô TK: 0123143254
                <br />
                Chủ Tài Khoản : Nguyễn Văn A
              </li>
              <li><b>Ngân Hàng Đông Á - Chi nhánh CDF</b></li>
              <li>
                Số TK: 6253534522
                <br />
                Chủ Tài Khoản : Nguyễn Văn A
              </li>
              <li><a href="http://online.gov.vn/Home/WebDetails/#" target="#"><img src="/static/icons/dathongbao.png" alt="Đăng ký bộ công thương" /></a></li>
            </ul>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            xs={6}
            className="footer__info__item"
          >
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
              <li>
                <a href="/gioi-thieu">
                  <span className="fa fa-angle-right" />
                  Giới thiệu về Hùng Dũng
                </a>
              </li>
              <li>
                <a href="/chinh-sach-hang-chinh-hang.html">
                  <span className="fa fa-angle-right" />
                  Chính sách hàng chính hãng
                </a>
              </li>
              <li>
                <a href="/chinh-sach-van-chuyen.html">
                  <span className="fa fa-angle-right" />
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="/chinh-sach-quy-dinh-chung.html">
                  <span className="fa fa-angle-right" />
                  Chính sách và quy định chung
                </a>
              </li>
              <li>
                <a href="/chinh-sach-doi-tra.html">
                  <span className="fa fa-angle-right" />
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="/huong-dan-mua-hang-tra-gop.html">
                  <span className="fa fa-angle-right" />
                  Hướng dẫn mua hàng trả góp
                </a>
              </li>
              <li>
                <a href="/mua-hang-truc-tuyen.html">
                  <span className="fa fa-angle-right" />
                  Mua hàng trực tuyến
                </a>
              </li>
              <li>
                <a href="/huong-dan-thanh-toan.html">
                  <span className="fa fa-angle-right" />
                  Hướng dẫn thanh toán
                </a>
              </li>
              <li>
                <a href="/chinh-sach-bao-mat.html">
                  <span className="fa fa-angle-right" />
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/tuyen-dung.html">
                  <span className="fa fa-angle-right" />
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            xs={6}
            className="footer__info__item"

          >
            <h3>Thanh toán an toàn</h3>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              className="paidMethod"
            >
              <img src="/static/icons/vnd.png" height={37} alt="vnd" />
              <img src="/static/icons/visa.png" height={35} alt="visa" />
              <img src="/static/icons/mastercard.png" height={37} alt="mastercard" />

            </Grid>
            <h3>Đăng ký nhận bản tin</h3>
            <div className="newsLetter">
              <TextField type="text" className="newsLetter__email" placeholder="Nhập email nhận tin KM" />
              <Button className="newsLetter__btn">Gửi</Button>
            </div>
          </Grid>
        </Grid>
      </footer>
      <p>
        WEBSITE ĐƯỢC SỞ HỮU VÀ QUẢN LÝ BỞI NGUYỄN VĂN A
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

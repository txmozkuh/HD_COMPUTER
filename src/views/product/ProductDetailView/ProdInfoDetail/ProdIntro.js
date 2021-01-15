/* eslint-disable no-tabs */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Button,
  Grid,
  makeStyles
} from '@material-ui/core';
import { CONTACT_INFOS } from 'src/utils/constants';
import ImgIcon from 'src/icons/ImgIcon';
import {
  Heart as AddToFavoriteIcon, Star as RatingStarIcon,
} from 'react-feather';
import {
  FaFacebook as FacebookIcon, FaTwitter as TwitterIcon,
  FaPinterest as PinterestIcon, FaReddit as RedditIcon
} from 'react-icons/fa';
import clsx from 'clsx';

import './ProdIntro.scss';

const useStyles = makeStyles(() => ({
  root: { },
}));

const ContactInfoCard = (props) => {
  const { name, phone } = props;
  return (
    <Grid style={{ width: 'fit-content' }} container direction="row" wrap="nowrap" justify="flex-start" alignItems="center">
      <ImgIcon style={{ margin: 0, padding: 1 }} name="icon_zalo" />
      <div style={{ marginLeft: 3, }}>
        {name}
        :
        {' '}
        {phone}
      </div>
    </Grid>
  );
};

const ProdIntro = (props) => {
  const classes = useStyles();
  const {
    data: {
      imageUrl, name, code, price, seenCount, detailText, qrCode
    }
  } = props;

  return (
    <Grid className={clsx(classes.root, 'prod-intro')} container direction="row" justify="space-evenly" alignItems="flex-start">
      <Grid
        item
        lg={4}
        xl={4}
        md={4}
        sm={12}
        xs={12}
        className="prod-intro__left"
      >
        <div className="prod-intro__img">
          <img alt={name} src={imageUrl} />
        </div>
        <div className="prod-intro__contact">
          <p>Mua hàng Online tại Hồ Chí Minh / Toàn quốc</p>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {
              CONTACT_INFOS.map((contact, idx) => <ContactInfoCard key={`contact-info__${idx}`} {...contact} />)
            }
          </Grid>
        </div>
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={8}
        sm={12}
        xs={12}
        className="prod-intro__right"
      >
        <div className="prod-intro__prod-name">{name}</div>
        <div className="prod-intro__two-row prod-intro--bottom-line">
          <div className="prod-intro__one-line prod-intro__one-line--red">
            <p className="prod-intro__row-title">
              Mã SP:
              {' '}
            </p>
            <div>
              {code}
            </div>
          </div>
          <div className="prod-intro__one-line">
            <AddToFavoriteIcon />
            <div>Yêu thích</div>
          </div>
        </div>
        <div className="prod-intro__two-row">
          <div className="prod-intro__one-line">
            <div className="prod-intro__row-title">
              Đánh giá:
              {' '}
            </div>
            <div>
              <RatingStarIcon color="yellow" />
              <RatingStarIcon color="yellow" />
              <RatingStarIcon color="yellow" />
              <RatingStarIcon color="yellow" />
              <RatingStarIcon />
            </div>
          </div>
          <div className="prod-intro__one-line">
            <div className="prod-intro__row-title">
              Lượt xem:
              {' '}
            </div>
            {seenCount}
            {' '}
            lượt
          </div>
        </div>
        <div className="prod-intro__row">
          <div className="prod-intro__row-title">Mô tả sản phẩm:</div>
          <div className="prod-intro__row-content">
            •	Chuyên Tư Vấn Máy Tính Thiết Kế Đồ Họa Theo Yêu Cầu.
            <br />
            •	Build Máy Tính Làm Đồ Họa Chuyên Nghiệp Cho các Cá nhân Doanh Nghiệp
            thiết Kế Nội Thất Kiến trúc , Kĩ Xão, Dựng Phim 2D 3D , Và Designer.
            <br />
            •	Xây Dựng Các Cấu Hình Pc Đồ Họa Theo đúng chuyên môn và nhu cầu sử dụng của công việc.
            <br />
            •	Hãy để Tin Học Anh Phát Cùng Bạn Đồng Hành Xây Dựng Những Chiếc PC Tốt Nhất.
          </div>
        </div>
        <div className="prod-intro__row one-line">
          <div className="prod-intro__row-title">Kho hàng:</div>
          <div>{detailText}</div>
        </div>
        <br />

        <div className="prod-intro__row one-line">
          <div className="prod-intro__row-title">Tình trạng:</div>
          <div>{detailText}</div>
        </div>

        <br />
        <div className="prod-intro__row one-line">
          <div className="prod-intro__row-title">Bảo hành:</div>
          <div>{detailText}</div>
        </div>
        <div className="prod-intro__row">
          <div className="prod-intro__row-title">Giao hàng:</div>
          <div>
            ═► Miễn phí giao hàng 300 km đối với khách hàng Games Net, Doanh Nghiệp, Dự Án
            <br />
            ═► Giao Hàng Lắp Đặt Miễn Phí Trong TP Hồ Chí Minh, Bao Check , Bao Test .
            Đảm bảo đúng cấu hình . Đúng Hiệu Năng Như Cam kết . Nếu không hài lòng không nhận hàng.
            <br />
            ═► Hỗ Trợ 100k Phí Giao Hàng Đối Với Các Bạn Ở Tỉnh.
          </div>
        </div>

        <div className="prod-intro__row price-row">
          <div className="price-row__div">
            <div className="price-row__price">{price * 1000}</div>
            <div className="price-row__vat">[Giá đã bao gồm VAT]</div>
          </div>
          <div className="price-row__qr-code"><img alt={qrCode} src={qrCode} /></div>
        </div>

        <br />
        <div className="prod-intro__row advertising">
          <div className="prod-intro__row-title advertising__title">QÙA TẶNG/ KHUYẾN MẠI</div>
          <div className="advertising__content">
            Tặng kèm window 10 pro bản quyền vĩnh viễn
          </div>
        </div>

        <div className="prod-intro__row">
          <div className="prod-intro__row-title">Tùy chọn sản phẩm</div>
          <div>Danh sách các tùy chọn khác</div>
        </div>

        <Grid
          className="prod-intro__row prod-btn-row"
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button className="prod-btn-row__btn prod-btn-row__btn--buy">Đặt mua ngay</Button>
          <Button className="prod-btn-row__btn prod-btn-row__btn--add-to-cart">Cho vào giỏ hàng</Button>
          <Button className="prod-btn-row__btn prod-btn-row__btn--installment-buy">Mua trả góp</Button>
        </Grid>

        <div className="prod-intro__row">
          <div className="prod-intro__row-title">
            Hãy chia sẻ sản phẩm
            {' '}
            {name}
            :
          </div>
          <div className="share-icons">
            <FacebookIcon size={25} />
            <TwitterIcon size={25} />
            <PinterestIcon size={25} />
            <RedditIcon size={25} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProdIntro;

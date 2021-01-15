/* eslint-disable global-require */
import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import './BannerView.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   },
// }));

const banners = [1, 2, 3, 4, 5, 6, 7].map((i) => `/static/images/products/${i}.png`);
const rightBannerImg = '/static/images/collections.gif';

const Home = () => {
  const youtubeId = 'SFvVDYvoSVE';
  return (
    <Grid container direction="row" justify="center" className="banner">
      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        xs={false}
        className="banner__category"
      />
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        xs={12}
        className="banner__left"
      >
        <Carousel
          showArrows
        //   onChange={onChange}
        //   onClickItem={onClickItem}
        //   onClickThumb={onClickThumb}
        >
          {/* {
            banners && banners.map((banner, idx) => (
              <div className="bannerSlider" key={`banner__${banner.id}`}>
                <img className="bannerSlider__img" src={banner.src} alt={banner.title} />
                <p className="bannerSlider__legend">{banner.title}</p>
              </div>
            ))
        } */}

          {banners && banners.map((img, idx) => (
            <div key={`img-slide_${String(idx)}`}>
              <img src={img} alt={img} />
              <p className="legend">
                Latop
                {idx}
              </p>
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        xs={12}
        className="banner__right rightBanner"
      >
        <div
          className="rightBanner__video"
        >
          <iframe
            title="Banner Video"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
          />
        </div>
        <div className="rightBanner__img">
          <img src={rightBannerImg} alt="Bộ sưu tập" />
        </div>
      </Grid>

    </Grid>
  );
};

export default Home;

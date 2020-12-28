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

          <div>
            <img src={require('./img/1.jpg')} alt="1" />
            <p className="legend">Latop 1</p>
          </div>
          <div>
            <img src={require('./img/2.jpg')} alt="2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={require('./img/3.jpg')} alt="3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={require('./img/4.png')} alt="4" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src={require('./img/5.jpg')} alt="51" />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img src={require('./img/6.jpg')} alt="6" />
            <p className="legend">Legend 6</p>
          </div>
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
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
          }}
        >
          <iframe
            title="Banner Video"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
          />
        </div>
        <div className="rightBanner__img">
          <img src={require('./img/collections.gif')} alt="Bộ sưu tập" />
        </div>
      </Grid>

    </Grid>
  );
};

export default Home;

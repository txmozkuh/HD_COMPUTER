import React, { useState } from 'react';
import {
  Container,
  Grid,
  Hidden,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import tempData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProdInfo = () => {
  const classes = useStyles();
  const [data] = useState(tempData[0]);

  console.log('xxx562 product detail: ', data);
  return (
    <Page
      className={classes.root}
      title="Product Detail"
    >
      <Container maxWidth="lg">
        <Grid>
          <Breadcrumb />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="center"
            alignContent="center"
          >
            <Grid
              item
              xl={9}
              lg={9}
              md={9}
              sm={12}
              xs={12}
            >
              san pham
            </Grid>
            <Hidden smDown>
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                style={{ background: 'cyan' }}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProdInfo;

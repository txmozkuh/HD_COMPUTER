import React, { useState } from 'react';
import {
  Container,
  Grid,
  Hidden,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import { FAKE_PROD } from 'src/utils/constants';
import ProdInfo from './ProdInfo';
import ProdFilter from './ProdFilter';

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

const ProductDetail = () => {
  const classes = useStyles();
  const [data] = useState(FAKE_PROD);

  return (
    <Page
      className={classes.root}
      title="Product Detail"
    >
      <Container maxWidth={false}>
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
              xl={10}
              lg={10}
              md={10}
              sm={12}
              xs={12}
            >
              <ProdInfo data={data} />
            </Grid>
            <Hidden smDown>
              <Grid
                item
                xl={2}
                lg={2}
                md={2}
              >
                <ProdFilter />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductDetail;

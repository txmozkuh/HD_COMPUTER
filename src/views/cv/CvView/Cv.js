import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CvCard from './CvCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Cv = (props) => {
  const classes = useStyles();
  console.log('xxx 001 ', props);
  useEffect(() => props.retrieveData(), []);

  const { cvs } = props;
  return (
    <Page
      className={classes.root}
      title="Curriculum vitae"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >
          {cvs.map((item, idx) => (<CvCard key={`cvCard_${item.id || idx}`} {...item} />))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Cv;

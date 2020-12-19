import {
  Button,
  Container,
  Grid,

  makeStyles
} from '@material-ui/core';
import React from 'react';
import { Edit as EditIcon } from 'react-feather';
import FileViewer from 'src/components/FileViewer';
import Page from 'src/components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CvInfo = (props) => {
  const classes = useStyles();

  const {
    isEdit, toggleEditView, cv, cvInfo, updateCvInfo
  } = props;

  return (
    <Page
      className={classes.root}
      title="Account"
    >
      {isEdit ? (
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Profile cv={cv} cvInfo={cvInfo} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <ProfileDetails
                toggleEditView={toggleEditView}
                cvInfo={cvInfo}
                updateCvInfo={updateCvInfo}
              />
            </Grid>
          </Grid>
        </Container>
      )
        : (
          <Container maxWidth="lg">
            <Grid item container direction="column" justify="center" alignContent="center" alignItems="center">
              <Grid item container justify="flex-end">
                <Grid>
                  {/* <IconButton
                    color="primary"
                    aria-label="Edit CV"
                    onClick={toggleEditView}
                  >
                    <EditIcon />
                  </IconButton> */}
                  <Button
                    color="primary"
                    aria-label="Edit CV"
                    onClick={toggleEditView}
                    startIcon={<EditIcon />}
                  >
                    View CV
                  </Button>
                </Grid>
              </Grid>
              {cv && (
                <Grid>
                  <FileViewer url={cv.cvUrl} fileType={cv.type} />
                </Grid>
              )}
            </Grid>
          </Container>
        )}
    </Page>
  );
};

export default (CvInfo);

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,

  makeStyles, Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FileViewer from 'src/components/FileViewer';

const DefaultAvatar = '/static/images/avatars/avatar_6.png';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({
  className, cv, cvInfo, getCvInfoAvatarUrl, ...rest
}) => {
  const classes = useStyles();

  if (!cvInfo || !cvInfo.fullName) {
    return (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <FileViewer
          propsStyle={{ maxWidth: 420 }}
          url={cv.cvUrl}
          fileType={cv.type}
          isFirstPage
        />
      </Box>
    );
  }
  const {
    avatar, fullName, jobTitle, phone, email, objective
  } = cvInfo;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={avatar ? getCvInfoAvatarUrl(avatar) : DefaultAvatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {fullName}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {jobTitle}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {phone}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {email}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {objective}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;

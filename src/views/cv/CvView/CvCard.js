import { Grid, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { CheckCircle as AcceptIcon, XCircle as RejectIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import FileViewer from 'src/components/FileViewer';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CvCard(props) {
  const classes = useStyles();
  const {
    cvId, avatar, fullName, object, jobTitle, cvUrl, type
  } = props;

  const navigate = useNavigate();
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={() => navigate(`${cvId}`)}>
          {avatar ? (
            <CardMedia
              className={classes.media}
              image={avatar || 'https://i.pinimg.com/originals/d5/db/40/d5db4080357e39a9286300675b778911.jpg'}
              title={fullName || ''}
            />
          )
            : (
              <FileViewer
                propsStyle={{ maxWidth: 300, maxHeight: 400 }}
                url={cvUrl}
                fileType={type}
                isFirstPage
              />
            ) }
        </CardActionArea>
        {fullName && (
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {fullName }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jobTitle }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {object }
          </Typography>
        </CardContent>
        )}
        <Grid container direction="row" justify="flex-end" space={2}>
          <Grid>
            <IconButton
              fontSize="small"
              color="primary"
            >
              <AcceptIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton
              fontSize="small"
              color="inherit"
            >
              <RejectIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

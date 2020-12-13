import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton, SvgIcon } from '@material-ui/core';
import { XCircle as RejectIcon, CheckCircle as AcceptIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

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
    cvId, avatar, name, object, applyPosition
  } = props;
  const navigate = useNavigate();
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={() => navigate(`${cvId}`)}>
          <CardMedia
            className={classes.media}
            image={avatar || 'https://i.pinimg.com/originals/d5/db/40/d5db4080357e39a9286300675b778911.jpg'}
            title={name || ''}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {name || 'Nguyen Van A'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {applyPosition || 'Developer'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {object || 'Become a best developer!'}
          </Typography>
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
        </CardContent>
      </Card>

    </Grid>
  );
}

import {
  Grid,
  IconButton,
  makeStyles, TextField
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import './TopBar.scss';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  search: {},
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const MainHeader = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid container direction="row" justify="space-between">
        <Grid>
          <img alt="main-logo" src="/static/icons/lap_icon.png" height={65} />
        </Grid>
        <Grid>
          <div className={classes.search}>
            <TextField
              placeholder="Gõ từ khóa tìm kiếm"
              variant="outlined"
              color="primary"
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string
};

export default MainHeader;

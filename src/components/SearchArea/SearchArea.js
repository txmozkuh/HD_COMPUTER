import React from 'react';

import { Grid, TextField, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import './SearchArea.scss';

const SearchArea = (props) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      wrap="nowrap"
      className="search-area"
    >
      <TextField
        placeholder="Gõ từ khóa tìm kiếm"
        variant="outlined"
        color="primary"
        type="search"
        className="search-area__input"
      />

      <IconButton className="search-area__btn" type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>
  );
};

export default SearchArea;

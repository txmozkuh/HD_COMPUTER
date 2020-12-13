import {
  Grid, IconButton, Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import React, { Component, useEffect } from 'react';
import { Upload as UploadIcon, XCircle as DeleteIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  input: {
    display: 'none',
  },
  uploadBtn: {
    border: '1px',
    borderColor: 'green'
  }
});

class CvUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  }

  onRemoveFile = () => {
    this.setState({ selectedFile: null });
  }

  render() {
    const { classes, onFileUpload } = this.props;
    const { selectedFile } = this.state;
    return (
      <Grid style={{ height: '70%' }} container spacing={2} justify="center" alignItems="center">
        {selectedFile
          ? (
            <Grid item container direction="column" justify="center" alignItems="center">
              <Grid item container justify="center" alignItems="center">
                <Grid>
                  <Typography style={{ fontWeight: 'bold' }}>Selected file: </Typography>
                </Grid>
                <Grid>
                  <Typography>
                    {selectedFile.name}
                  </Typography>
                </Grid>
                <Grid>
                  <IconButton color="secondary" onClick={this.onRemoveFile}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid>
                <Button color="primary" onClick={() => onFileUpload(selectedFile)}>Submit</Button>
              </Grid>

            </Grid>
          )
          : (
            <Grid item>
              <label htmlFor="cv-upload-btn">
                <Button
                  color="primary"
                  fullWidth
                  variant="text"
                  startIcon={<UploadIcon />}
                  component="span"
                  className={classes.uploadBtn}
                >
                  Upload CV
                </Button>
                <input
                  accept=".doc, .docx, .pdf"
                  className={classes.input}
                  id="cv-upload-btn"
                  type="file"
                  onChange={this.onFileChange}
                />
              </label>

            </Grid>
          )}

      </Grid>
    );
  }
}

function WrapCvUpload(props) {
  const navigate = useNavigate();
  const { isViewUploaded, cv, setNavigateCv } = props;
  console.log('x 001 props: ', props);
  useEffect(() => {
    if (isViewUploaded && cv && cv.id) {
      setNavigateCv(false);
      navigate(`/cv/${cv.id}`);
    }
  }, [isViewUploaded]);
  return (
    <CvUpload {...props} />
  );
}

export default withStyles(styles)(WrapCvUpload);

/* eslint-disable react-hooks/rules-of-hooks */
import { connect } from 'react-redux';
import { createCvRequest, setNavigateCv } from 'src/redux/modules/cv';
import CvUpload from './CvUpload';

const mapStateToProps = ({ cv }) => {
  return ({
    ...cv
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // On file upload (click the upload button)
    onFileUpload: (selectedFile) => {
      dispatch(createCvRequest(selectedFile));
    },
    setNavigateCv: (value) => dispatch(setNavigateCv(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvUpload);

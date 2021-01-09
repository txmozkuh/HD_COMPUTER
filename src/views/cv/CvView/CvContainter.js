/* eslint-disable react-hooks/rules-of-hooks */
import { connect } from 'react-redux';
import { getAllCvInfoRequest } from 'src/redux/modules/cvInfo';
import Cv from './Cv';

const mapStateToProps = ({ cvInfo }) => {
  return ({
    ...cvInfo
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    retrieveData: () => dispatch(getAllCvInfoRequest())
    ,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cv);

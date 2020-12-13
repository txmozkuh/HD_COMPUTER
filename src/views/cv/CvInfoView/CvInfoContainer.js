/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCvRequest } from 'src/redux/modules/cv';
import CvInfo from './CvInfo';

const mapStateToProps = ({ cv }) => {
  return ({
    ...cv
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCv: (id) => dispatch(getCvRequest(id))
  };
};

const CvInfoContainer = (props) => {
  const { cv, getCv } = props;
  const [isEdit, setIsEdit] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (!cv || cv === {}) { getCv(params.id); }
  }, [cv]);

  console.log('xxx 460 cv: ', cv);
  return <CvInfo {...props} isEdit={isEdit} toggleEditView={() => setIsEdit(!isEdit)} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CvInfoContainer);

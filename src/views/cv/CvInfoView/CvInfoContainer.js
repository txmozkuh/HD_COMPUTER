/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCvRequest } from 'src/redux/modules/cv';
import { getCvInfoRequest, setUpdateCvInfoStatus, updateCvInfoRequest } from 'src/redux/modules/cvInfo';
import CvInfo from './CvInfo';

const mapStateToProps = ({ cv, cvInfo }) => {
  return ({
    ...cv,
    cvInfo: cvInfo.cvInfo,
    updateCvInfoStatus: cvInfo.updateCvInfoStatus
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCv: (id) => dispatch(getCvRequest(id)),
    getCvInfo: (cvId) => dispatch(getCvInfoRequest(cvId)),
    updateCvInfo: (cvInfo) => dispatch(updateCvInfoRequest(cvInfo)),
    setUpdateCvInfoStatus: (status) => dispatch(setUpdateCvInfoStatus(status))
  };
};

const CvInfoContainer = (props) => {
  const {
    getCv, getCvInfo, updateCvInfo, updateCvInfoStatus, setUpdateCvInfoStatus
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();

  useEffect(() => {
    getCv(params.id);
    if (isEdit === false) getCvInfo(params.id);
    if (isEdit && updateCvInfoStatus) setIsEdit(false);
    if (!isEdit) setUpdateCvInfoStatus(null);
  }, [params.id, isEdit, updateCvInfoStatus]);

  return (
    <CvInfo
      {...props}
      isEdit={isEdit}
      toggleEditView={() => setIsEdit(!isEdit)}
      updateCvInfo={updateCvInfo}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CvInfoContainer);

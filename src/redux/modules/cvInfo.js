import CvAPI from 'src/services/cv';
import CvInfoAPI from 'src/services/cvInfo';

// Actions
const GET_ALL_CV_INFO = 'sssv/cvInfo/GET_ALL_CV_INFO';
const CREATE_CV_INFO = 'sssv/cvInfo/CREATE_CV_INFO';
const UPDATE_ALL_CV_INFO = 'sssv/cvInfo/UPDATE_ALL_CV_INFO';
const GET_ONE_CV_INFO = 'sssv/cvInfo/GET_ONE_CV_INFO';
const SET_UPDATE_CV_INFO_STATUS = 'sss/cvInfo/SET_UPDATE_CV_INFO_STATUS';

const initialState = {
  cvs: [],
  cvInfo: null,
  updateCvInfoStatus: null // Null|True|False
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  // TODO: handle payload of action
  switch (action.type) {
    case GET_ALL_CV_INFO:
      return {
        ...state,
        cvs: action.cvs,
      };
    case CREATE_CV_INFO:
      return {
        ...state,
      };
    case UPDATE_ALL_CV_INFO:
      return {
        ...state,
        cvs: action.cvs,
      };

    case GET_ONE_CV_INFO:
      return {
        ...state,
        cvInfo: action.cvInfo
      };

    case SET_UPDATE_CV_INFO_STATUS: {
      return {
        ...state,
        updateCvInfoStatus: action.status
      };
    }
    default: return state;
  }
}

// Action Creators
export function getAllCvInfo(cvs) {
  return { type: GET_ALL_CV_INFO, cvs };
}

// export function createCv(cvInfo) {
//   return { type: CREATE_CV_INFO, cvInfo };
// }

export function updateAllCv(cvs) {
  return { type: UPDATE_ALL_CV_INFO, cvs };
}

export function getOneCvInfo(cvInfo) {
  return { type: GET_ONE_CV_INFO, cvInfo };
}

export function setUpdateCvInfoStatus(status) {
  return { type: SET_UPDATE_CV_INFO_STATUS, status };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getAllCvInfoRequest() {
  return (dispatch) => CvInfoAPI.getAllCvInfo().then(async (res) => {
    const cvInfos = res.data;
    for (let i = 0; i < cvInfos.length; i++) {
      const cvInfo = cvInfos[i];
      if (cvInfo && !cvInfo.avatar) {
        // eslint-disable-next-line no-await-in-loop
        const cvUrl = await CvAPI.getCvUrl(cvInfo.cvId).then((res) => res.data);
        cvInfos[i] = { ...cvInfo, cvUrl };
      }
    }
    return dispatch(getAllCvInfo(cvInfos));
  });
}

export function updateCvInfoRequest(cvInfo) {
  return (dispatch) => CvInfoAPI.updateCvInfo(cvInfo)
    .then(() => dispatch(setUpdateCvInfoStatus(true)))
    .catch(() => dispatch(setUpdateCvInfoStatus(false)));
}

export function getCvInfoRequest(cvId) {
  return (dispatch) => CvInfoAPI.getOne(cvId)
    .then((res) => dispatch(getOneCvInfo(res.data ? res.data[0] : null)));
}

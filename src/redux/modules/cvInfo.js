import CvInfoAPI from 'src/services/cvInfo';

// Actions
const CREATE_CV_INFO = 'sssv/cvInfo/CREATE_CV_INFO';
const UPDATE_CV_INFO = 'sssv/cvInfo/UPDATE_CV_INFO';

const initialState = {
  cvs: [],
  isFetching: false,
  error: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  // TODO: handle payload of action
  switch (action.type) {
    case CREATE_CV_INFO:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_CV_INFO:
      return {
        ...state,
        cvs: action.cvs,
        isFetching: false
      };
    default: return state;
  }
}

// Action Creators
// export function getAllCv() {
//   return { type: GET_ALL_CV };
// }

export function createCv(cvInfo) {
  return { type: CREATE_CV_INFO, cvInfo };
}

export function updateCv(cvs) {
  return { type: UPDATE_CV_INFO, cvs };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getAllCvRequest() {
  return (dispatch) => CvInfoAPI.getAllCvInfo().then((res) => dispatch(updateCv(res.data)));
}

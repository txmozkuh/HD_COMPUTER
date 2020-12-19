import CvAPI from 'src/services/cv';

// Actions
const GET_CV = 'ssscv/cv/GET_CV';
const CREATE_CV = 'sssv/cv/CREATE_CV';
const SET_NAVIGATE_CV = 'sssv/cv/SET_NAVIGATE_CV';
const UPLOAD_CV_SUCCESS = 'sssv/cv/UPLOAD_CV_SUCCESS';

const initialState = {
  cv: null,
  isViewUploaded: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  // TODO: handle payload of action
  switch (action.type) {
    case GET_CV:
      return {
        ...state,
        cv: action.cv
      };
    case CREATE_CV:
      return {
        ...state,
        cv: action.cv
      };
    case SET_NAVIGATE_CV:
      return {
        ...state,
        isViewUploaded: action.value
      };
    case UPLOAD_CV_SUCCESS:
      return {
        ...state,
        isViewUploaded: true
      };
    default: return state;
  }
}

// Action Creators
export function getCv(cv) {
  return { type: GET_CV, cv };
}
export function createCv(cv) {
  return { type: CREATE_CV, cv };
}

export function setNavigateCv(value) {
  return { type: SET_NAVIGATE_CV, value };
}

export function uploadCvSuccess() {
  return { type: UPLOAD_CV_SUCCESS };
}

// action thunk

export function createCvRequest(file) {
  return (dispatch) => CvAPI.uploadFile(file).then(async (res) => {
    const cv = res.data;
    const cvUrl = await CvAPI.getCvUrl(cv.id).then((res) => res.data);

    dispatch(createCv({ ...cv, cvUrl }));
    return dispatch(uploadCvSuccess());
  });
}

export function getCvRequest(id) {
  return (dispatch) => CvAPI.get(id).then((res) => dispatch(getCv(res.data)));
}

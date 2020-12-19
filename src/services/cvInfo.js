/* eslint-disable class-methods-use-this */
import http from './httpCommon';

class CvInfoAPI {
  getAllCvInfo() {
    return http.get('/detailInfo');
  }

  getOne(cvId) {
    return http.get(`/detailInfo?cvId=${cvId}`);
  }

  updateCvInfo(cvInfo) {
    return http.put('/detailInfo', cvInfo);
  }
}

export default new CvInfoAPI();

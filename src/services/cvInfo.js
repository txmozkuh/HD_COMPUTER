/* eslint-disable class-methods-use-this */
import http from './httpCommon';

class CvInfoAPI {
  getAllCvInfo() {
    return http.get('/detailInfo');
  }
}

export default new CvInfoAPI();

/* eslint-disable class-methods-use-this */
import Axios from 'axios';
import http from './httpCommon';

class CvAPI {
  getAll() {
    return http.get('/cv');
  }

  get(id) {
    return http.get(`/cv/${id}`);
  }

  uploadFile(file) {
    const formDataFile = new FormData();
    formDataFile.append('file', file);
    const contentType = file.type;
    const splitStrs = file.name.split('.');
    const mime = `.${splitStrs[splitStrs.length - 1]}`;
    console.log('x007 getPut url: ', contentType, mime);

    return new Promise((resolve, reject) => {
      try {
        http
          .get(`/cv/put?type=${contentType}&mime=${mime}`)
          .then((res) => {
            const { url, fileName } = res.data;
            console.log('xxx 008 getPut url: ', res.data);
            Axios
              .put(
                url,
                formDataFile,
                { headers: { 'Content-Type': contentType } }
              )
              .then((res) => {
                http.post('/cv', { key: fileName }).then((res) => resolve(res));
              });
          });
        // resolve(true);
      } catch (error) {
        reject(new Error('Put file error: ', error));
      }
    });
  }
}

export default new CvAPI();

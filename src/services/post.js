/* eslint-disable class-methods-use-this */
import http from 'services/httpCommon';

class PostAPI {
  getAll() {
    return http.get('/posts');
  }

  get(id) {
    return http.get(`/posts/${id}`);
  }

  create(data) {
    return http.post('/posts', data);
  }

  update(id, data) {
    return http.put(`/posts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/posts/${id}`);
  }

  deleteAll() {
    return http.delete('/posts');
  }

  findByUserId(userId) {
    return http.get(`/posts?userId=${userId}`);
  }

  findByUserIdPaginating({
    userId, size, page, id, brand, caption, itemName
  }) {
    let query = `/posts?userId=${userId}&size=${size}&page=${page}`;

    if (id) query += `&id=${id}`;
    if (brand) query += `&brand=${brand}`;
    if (caption) query += `&caption=${caption}`;
    if (itemName) query += `&itemName=${itemName}`;

    return http.get(query);
  }
}

export default new PostAPI();

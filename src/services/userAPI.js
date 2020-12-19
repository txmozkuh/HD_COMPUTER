/* eslint-disable class-methods-use-this */
import { auth } from './firebaseAPI';
import http from './httpCommon';

class UserAPI {
  async register(user) {
    console.log('xxx 329 usr: ', user);
    const res = await http.post('/user', user);
    console.log('xx330 registedUser: ', res);
    await auth.signInWithEmailAndPassword(user.email, user.password);
    return res;
  }

  async login({ email, password }) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true);
      return http.put('/user', { idToken });
    } catch (error) {
      console.error('Error signing in with password and email', error);
      return { message: 'Error signing in with password and email', error };
    }
  }

  logout() {
    return auth.signOut();
  }
}

export default new UserAPI();

import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
    this.auth = app.auth();
    this.storage = app.storage();
  }

  reauthenticate(password) {
    const user = this.auth.currentUser;
    const credentials = app.auth.EmailAuthProvider.credential(
      user.email,
      password,
    );
    return user.reauthenticateWithCredential(credentials);
  }

  updateEmail(password, email) {
    return this.reauthenticate(password).then(() =>
      this.auth.currentUser.updateEmail(email),
    );
  }

  updateProfile(payload) {
    return this.auth.currentUser.updateProfile(payload);
  }

  updatePassword(password, newPassword) {
    return this.reauthenticate(password).then(() =>
      this.auth.currentUser.updatePassword(newPassword),
    );
  }
}

const firebase = new Firebase();
export default firebase;

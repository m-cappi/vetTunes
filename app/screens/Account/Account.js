import React, {useEffect, useState, useContext} from 'react';

import {FirebaseContext} from '../../firebase';

import Loading from '../../components/Loading';
import Guest from './Guest';
import User from './User';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, [firebase]);

  if (isLoggedIn === null) {
    return <Loading isVisible={true} text="loading..." />;
  } else {
    return isLoggedIn ? <User /> : <Guest />;
  }
};

export default Account;

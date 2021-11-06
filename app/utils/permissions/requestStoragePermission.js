import {PermissionsAndroid, Platform} from 'react-native';

const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    const userResponse = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]).then(result => {
      if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        return 'GRANTED';
      } else if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          'never_ask_again'
      ) {
        return 'NEVER_ASK_AGAIN';
      } else if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'denied'
      ) {
        return 'DENIED';
      } else {
        console.warn(result);
        return 'Unexpected result';
      }
    });
    return userResponse;
  } else if (Platform.OS === 'iOS') {
    console.log('PENDING: build a permission request for iOs');
    return;
  } else {
    console.warn(
      'unexpected Platform.OS at requestStoragePermission.js. Platform is: ',
      Platform.OS,
    );
    return;
  }
};

// const requestStoragePermission = async () => {
//   console.log('requesting storage permissions');
// };

export default requestStoragePermission;

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  // const host = { host: '192.168.43.7' }; // YOUR_APP_ADRESS
  const host = { host: '10.230.30.69' }; // YOUR_APP_ADRESS

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure(host)
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}

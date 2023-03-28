import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDm4ucj2a6c1RMTamG0-dkbA3JjXMVVyTI',
  authDomain: 'chalk-2c91e.firebaseapp.com',
  databaseURL: 'https://chalk-2c91e-default-rtdb.firebaseio.com/',
  projectId: 'chalk-2c91e',
  storageBucket: 'chalk-2c91e.appspot.com',
  messagingSenderId: '540391049912',
  appId: '1:540391049912:ios:bad699cbbc8793bf4d824d',
};

/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}*/

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app, database, auth, firestore};

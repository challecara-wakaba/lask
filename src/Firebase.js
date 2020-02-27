import * as firebase from 'firebase';
import config from '.firebaseConfig';

// firebaseオブジェクトの初期化
firebase.initializeApp(config);

// 初期化されたfirebaseオブジェクトを取り出す
export default firebase;

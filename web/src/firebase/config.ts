import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_zS_o97uYk5lo6nbyfQSsePUc8dYryTA",
  authDomain: "toychat-a5115.firebaseapp.com",
  databaseURL: "https://toychat-a5115.firebaseio.com",
  projectId: "toychat-a5115",
  storageBucket: "toychat-a5115.appspot.com",
  messagingSenderId: "675083918152",
  appId: "1:675083918152:web:ce2d395272af251c03317d",
  measurementId: "G-2R6G6Q2CZ4",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp
  .auth()
  .signInAnonymously()
  .catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`エラーが発生しました。エラーコード${errorCode}:${errorMessage}`);
  });
export const firebaseDb = firebaseApp.database();

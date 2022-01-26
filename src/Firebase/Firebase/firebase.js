import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDf38FVVMQ8xcTtVEOwDiutkjk9XfM5Cx4",
    authDomain: "calendr-190b1.firebaseapp.com",
    projectId: "calendr-190b1",
    storageBucket: "calendr-190b1.appspot.com",
    messagingSenderId: "842028537513",
    appId: "1:842028537513:web:c2dad5fafd05a28bd33bb8",
    measurementId: "G-C91FKVEG5Y"
  };

 
  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
   
  export default Firebase;
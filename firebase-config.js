const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "agnivansh.firebaseapp.com",

projectId: "agnivansh",

storageBucket: "agnivansh.appspot.com",

messagingSenderId: "123456",

appId: "APP_ID"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

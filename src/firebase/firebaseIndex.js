import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCe8c6CH_7JMSvSmGZHQDZn0mDk2MKjhFw",
  authDomain: "appsus-tech-test.firebaseapp.com",
  databaseURL: "https://appsus-tech-test.firebaseio.com",
  projectId: "appsus-tech-test",
  storageBucket: "appsus-tech-test.appspot.com",
  messagingSenderId: "35686977171",
  appId: "1:35686977171:web:8fe209db182f8df0eec766",
  measurementId: "G-15058TQH8Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore()
export default db;
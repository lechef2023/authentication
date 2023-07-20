import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app'; // Cambiamos la importación aquí
import 'firebase/compat/auth'; // Cambiamos la importación aquí
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCU73RxrfcH3JTpbf5H30nJX199zP0J6b8",
  authDomain: "aulavirtual-1e3d2.firebaseapp.com",
  projectId: "aulavirtual-1e3d2",
  storageBucket: "aulavirtual-1e3d2.appspot.com",
  messagingSenderId: "369023069546",
  appId: "1:369023069546:web:52ab26d3e10411aa8f4913",
  measurementId: "G-E4CJ49KH0B"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
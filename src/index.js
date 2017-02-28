import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyDFSafyAfYijSCe_Aqwd31aeN32PW-xUpw",
	authDomain: "pseudoig-861ae.firebaseapp.com",
	databaseURL: "https://pseudoig-861ae.firebaseio.com",
	storageBucket: "pseudoig-861ae.appspot.com",
	messagingSenderId: "1032067937237"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

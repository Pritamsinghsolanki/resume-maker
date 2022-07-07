import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
// 1
// redux firestore -> db add 
import { reduxFirestore, getFirestore, createFirestoreInstance }
  from 'redux-firestore';
// redux firebase -> auth  
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
// Ye extension hame yaad rakni hai 
import { composeWithDevTools } from 'redux-devtools-extension'
const firebaseConfig = {
  apiKey: "AIzaSyBerfiRuQrIPdLURVGIEUydNTuV5xizu7U",
  authDomain: "resume-maker-3d037.firebaseapp.com",
  projectId: "resume-maker-3d037",
  storageBucket: "resume-maker-3d037.appspot.com",
  messagingSenderId: "592448676043",
  appId: "1:592448676043:web:e7cf85a1f42d429ff0fb4e",
  measurementId: "G-K49RW7MZC7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// 2. to integrate firebase with redux store
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);
// 3. 
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      {/* to integrate firabase with your redux app  */}
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        // redux storage change 
        dispatch={reduxStore.dispatch}
        // firestore
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
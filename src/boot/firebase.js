import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore'; // eslint-disable-line

const firebaseConfig = {
  apiKey: 'AIzaSyDUfS_Ibm942vBNJ82AXJAGCmSEcD-YEDo',
  authDomain: 'web2final-6c78b.firebaseapp.com',
  projectId: 'web2final-6c78b',
  storageBucket: 'web2final-6c78b.appspot.com',
  messagingSenderId: '407093912037',
  appId: '1:407093912037:web:d73d5ddcbc76c5401f4f0c',
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };

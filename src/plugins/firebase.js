/**
 * =============
 * FIREBASE
 * =============
 *
 * Configure the firebase sdk
 */

import Vue from 'vue';
import * as Firebase from 'firebase';

// Get firebase config from env
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

Firebase.initializeApp(config);

// Bind Firebase to Vue.
Vue.$firebase = Firebase;

Object.defineProperty(Vue.prototype, '$firebase', {
  get() {
    return Firebase;
  },
});

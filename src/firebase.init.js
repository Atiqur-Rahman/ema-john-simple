// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDqrwZWDnMu9MDq6kKuHALruLZxD2CSPGY',
    authDomain: 'ema-john-simple-67b82.firebaseapp.com',
    projectId: 'ema-john-simple-67b82',
    storageBucket: 'ema-john-simple-67b82.appspot.com',
    messagingSenderId: '119882646444',
    appId: '1:119882646444:web:4487515571c662dd88f009',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

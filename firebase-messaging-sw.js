importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCDMNjYWpoSJy3UxIysJP1RN_ZT-Q7hzkc",
    authDomain: "shwey-6e752.firebaseapp.com",
    projectId: "shwey-6e752",
    storageBucket: "shwey-6e752.firebasestorage.app",
    messagingSenderId: "801859752938",
    appId: "1:801859752938:web:015f908c54e3c9bf5893"
});

const messaging = firebase.messaging();

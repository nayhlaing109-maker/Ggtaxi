importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 🔥 သင်၏ Firebase Project Settings ထဲက Config ကုဒ်လေးတွေနဲ့ အစားထိုးပါ
firebase.initializeApp({
  apiKey: "AIzaSyD3hhkLybww1LCS8ir2EU7nDxrO7rOAoP0",
  authDomain: "pyapay.firebaseapp.com",
  projectId: "pyapay",
  messagingSenderId: "369757698666",
  appId: "1:369757698666:web:6e30f7c55fd220b4cc2813",
});

const messaging = firebase.messaging();

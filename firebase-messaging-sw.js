importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 🔔 ပုံ (fdf523ec) ထဲက သင်၏ Web Config Key များ
const firebaseConfig = {
  apiKey: "AIzaSyD3hhkLybww1LCS8ir2EU7nDxrO7rOAoP0",
  authDomain: "pyapay.firebaseapp.com",
  projectId: "pyapay",
  storageBucket: "pyapay.firebasestorage.app",
  messagingSenderId: "369757698666",
  appId: "1:369757698666:web:6e30f7c55fd220b4cc2813",
  measurementId: "G-F85J6C4B3P"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background မှာ Notification ပြသရန်
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

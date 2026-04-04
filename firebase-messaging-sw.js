// version အပြည့်အစုံနဲ့ ပြန်ခေါ်ရပါမယ်
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDMNjYWpoSJy3UxIysJP1RN_ZT-Q7hzkc",
  authDomain: "shwey-6e752.firebaseapp.com",
  projectId: "shwey-6e752",
  storageBucket: "shwey-6e752.firebasestorage.app",
  messagingSenderId: "801859752938",
  appId: "1:801859752938:web:015f908c54e3c9b3bf5893"
});

const messaging = firebase.messaging();

// Background မှာ message ရောက်ရင် အချက်ပေးဖို့ ဒါကို မဖြစ်မနေ ထည့်ရပါမယ်
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/Ggtaxi/favicon.ico' // လမ်းကြောင်း မှန်ပါစေ
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyDknnJF6kOMr764Cck0cvumjWWNqxgEPN4",
    authDomain: "quanvanstore-91740.firebaseapp.com",
    projectId: "quanvanstore-91740",
    storageBucket: "quanvanstore-91740.appspot.com",
    messagingSenderId: "289768417165",
    appId: "1:289768417165:web:59475f8ae35efca5497fc4"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDknnJF6kOMr764Cck0cvumjWWNqxgEPN4",
    authDomain: "quanvanstore-91740.firebaseapp.com",
    projectId: "quanvanstore-91740",
    storageBucket: "quanvanstore-91740.appspot.com",
    messagingSenderId: "289768417165",
    appId: "1:289768417165:web:59475f8ae35efca5497fc4"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestForToken = (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BMgTyxmq3kR7lQrQkH3f8LDoQ7TUuAQ1siZdBhr5_hPQWm1sMM8lTDWfTJs2eN65TEhvrPHZ7VitqRfrNoA4pzM' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });
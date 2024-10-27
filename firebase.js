// backend/firebase.js

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Adjust the path to your downloaded JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://e-learning-3c703-default-rtdb.firebaseio.com/', // Replace with your Firebase project's database URL
});

const db = admin.firestore();

module.exports = db;

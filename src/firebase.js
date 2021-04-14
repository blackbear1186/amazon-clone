import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyYM2RVCFvjC4BJOcGdCzhaSBCdxssydg",
  authDomain: "clone-38989.firebaseapp.com",
  projectId: "clone-38989",
  storageBucket: "clone-38989.appspot.com",
  messagingSenderId: "879994521729",
  appId: "1:879994521729:web:b58ed2b18fee5fb3d6a580",
  measurementId: "G-B0JMJ7WD9Z",
})

const auth = firebase.auth();

export { auth };
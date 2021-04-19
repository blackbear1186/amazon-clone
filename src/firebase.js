import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

app.initializeApp(firebaseConfig)

const auth = app.auth();

export { auth };
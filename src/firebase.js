import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC5V1PZVw5b-GWu33jBsBpah6NnUMpvTDw",
  authDomain: "cclab-cf04c.firebaseapp.com",
  projectId: "cclab-cf04c",
  storageBucket: "cclab-cf04c.appspot.com",
  messagingSenderId: "221747812517",
  appId: "1:221747812517:web:8125e329a46b792566954c",
  measurementId: "G-0JDE0BD6W9"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app

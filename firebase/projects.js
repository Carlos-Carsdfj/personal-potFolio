import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCOglC33H5TjB_SGMS2cTE18LqSrxrq3Kc",
    authDomain: "collection-projects.firebaseapp.com",
    projectId: "collection-projects",
    storageBucket: "collection-projects.appspot.com",
    messagingSenderId: "1092577789765",
    appId: "1:1092577789765:web:c2846e8439317b71e0202c"
  }
  try {
    firebase.initializeApp(firebaseConfig)
    
    
    

  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
    const db = firebase.firestore()
    
    const docRef = db.collection('projects')

  export const  beAnony =()=>{


      return firebase.auth().signInAnonymously()
      .then(() => {
          const isAnony = true
        return isAnony
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('ERROR Code:',errorCode)
        console.log('ERROR Message:',errorMessage)
      });
   
   
   
   }
   
   
  export const  getDatabase = async ()=>{

    
    const projects = []
    const snapshot = await docRef.get()

    snapshot.forEach((doc) => {
    
    projects.push(doc.data())


    });

  return projects
  }


var admin = require("firebase-admin");

var firebaseConfig = {
    apiKey: "AIzaSyCOglC33H5TjB_SGMS2cTE18LqSrxrq3Kc",
    authDomain: "collection-projects.firebaseapp.com",
    projectId: "collection-projects",
    storageBucket: "collection-projects.appspot.com",
    messagingSenderId: "1092577789765",
    appId: "1:1092577789765:web:c2846e8439317b71e0202c"
  }
    try {
      admin.initializeApp(firebaseConfig);
    } catch (error) {
      if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error("Firebase admin initialization error", error.stack);
      }
    }

    const db = admin.firestore();
    export const  addAnithing = async (datos)=>{

        const docRef = db.collection('projects').doc('documentNew')
    
        await docRef.set({
          data: datos
          
          });
    
      }


    export default admin.firestore();
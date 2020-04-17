import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDnWAOBJsGieEhCRSMN_i87DgKPeGMCBXA",
  databaseURL: "https://coronaapp-ionic.firebaseio.com",
 
 
};
firebase.initializeApp(config);

export default firebase;
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {

};

const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());

export { base }
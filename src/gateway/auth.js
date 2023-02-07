import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCYZD8WvbN829_TeYeMvw_lAlwS2D3eddc',
  authDomain: 'gentech-977dc.firebaseapp.com',
  projectId: 'gentech-977dc',
  storageBucket: 'gentech-977dc.appspot.com',
  messagingSenderId: '1006109677763',
  appId: '1:1006109677763:web:048c53c41bb48deafcea76',
  measurementId: 'G-JEYPZYEGLE',
};

const app = initializeApp(firebaseConfig);
export default getAuth(app);

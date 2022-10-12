import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDT48YUojIgpnEV9pUivGR0Dz1I2Rp46Rc",
  authDomain: "miniblog-62aca.firebaseapp.com",
  projectId: "miniblog-62aca",
  storageBucket: "miniblog-62aca.appspot.com",
  messagingSenderId: "705862129329",
  appId: "1:705862129329:web:5bdacc896e5c52f928f490"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

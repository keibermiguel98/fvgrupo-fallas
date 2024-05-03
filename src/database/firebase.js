// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCh1xaq6pGk04qbehRhJhjKCZYGMV3EVEU",
  authDomain: "fvgrupo-bodegon.firebaseapp.com",
  projectId: "fvgrupo-bodegon",
  storageBucket: "fvgrupo-bodegon.appspot.com",
  messagingSenderId: "123971714327",
  appId: "1:123971714327:web:06edf34e3d08d0b795cb52"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAO18eRnUbVy2lZ5QtmEjgdLU5JRBZbRSY",
  authDomain: "gerenciador-contatos.firebaseapp.com",
  projectId: "gerenciador-contatos",
  storageBucket: "gerenciador-contatos.appspot.com",
  messagingSenderId: "956038790529",
  appId: "1:956038790529:web:32362e8aa8c0433ca2fc80"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

import { app } from "../../service/firebase-config";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../consts";

// export const signIn = (credentials) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase().firestore();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         dispatch({ type: LOGIN_SUCCESS });
//       })
//       .catch((err) => {
//         dispatch({ type: LOGIN_ERROR, err });
//       });
//   };
// };
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../service/firebase-config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const register = async (newUser) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    ); //registerEmail, registerPassword
    console.log(newUser, register);
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (credentials) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ); //registerEmail, registerPassword
    console.log(user, "actions");
  } catch (err) {
    alert(err.message);
  }
};

export const logout = async () => {
  await signOut(auth);
};

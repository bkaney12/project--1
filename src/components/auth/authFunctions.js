// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../../service/firebase-config";

// export const register = async () => {
//   try {
//     const user = await createUserWithEmailAndPassword(auth, {}); //registerEmail, registerPassword
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const login = async (credentials) => {
//   try {
//     const user = await signInWithEmailAndPassword(auth, credentials); //registerEmail, registerPassword
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const logout = async () => {
//   await signOut(auth);
// };

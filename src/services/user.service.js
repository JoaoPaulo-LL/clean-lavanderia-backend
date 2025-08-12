import { db } from "../config/firebase.js";

const usersRef = db.ref("users"); // chama ref direto no db

export const createUserService = async (userObj) => {
  try {
    const newUserRef = usersRef.push(); // push direto na ref
    await newUserRef.set(userObj); // set direto na ref nova
    return { id: newUserRef.key, ...userObj };
  } catch (error) {
    throw error;
  }
};

export const getUserByIdService = async (userId) => {
  try {
    const userRef = db.ref(`users/${userId}`); // ref direto no db
    const snapshot = await userRef.get(); // get direto na ref
    if (snapshot.exists()) {
      return { id: userId, ...snapshot.val() };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async (userId, updates) => {
  try {
    const userRef = db.ref(`users/${userId}`);
    await userRef.update(updates);
    return { id: userId, ...updates };
  } catch (error) {
    throw error;
  }
};

export const deleteUserService = async (userId) => {
  try {
    const userRef = db.ref(`users/${userId}`);
    await userRef.remove();
    return { id: userId, deleted: true };
  } catch (error) {
    throw error;
  }
};

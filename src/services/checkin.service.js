import { db } from "../config/firebase.js";

const checkinRef = db.ref("checkins"); // chama ref direto no db

export const getCheckinByIdService = async (checkinId) => {
  try {
    const checkinRef = db.ref(`checkins/${checkinId}`);
    const snapshot = await checkinRef.get();

    if (snapshot.exists()) {
      return { id: checkinId, ...snapshot.val() };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const getAllCheckinService = async () => {
  try {
    const snapshot = await checkinRef.get();

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([id, checkin]) => ({ id, ...checkin }));
    }

    return [];
  } catch (error) {
    throw error;
  }
};

export const createCheckinService = async (checkinObj) => {
  try {
    const newCheckinRef = checkinRef.push();
    await newCheckinRef.set(checkinObj);
    return { id: newCheckinRef.key, ...checkinObj };
  } catch (error) {
    throw error;
  }
};

export const updateCheckinService = async (checkinId, updates) => {
  try {
    const checkinRef = db.ref(`checkins/${checkinId}`);
    await checkinRef.update(updates);
    return { id: checkinId, ...updates };
  } catch (error) {
    throw error;
  }
};

export const deleteCheckinService = async (checkinId) => {
  try {
    const checkinRef = db.ref(`checkins/${checkinId}`);
    await checkinRef.remove();
    return { id: checkinId, deleted: true };
  } catch (error) {
    throw error;
  }
};

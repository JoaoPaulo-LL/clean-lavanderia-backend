import { db } from "../config/firebase.js";

const clientRef = db.ref("clients"); // chama ref direto no db

export const createClientService = async (clientObj) => {
  try {
    const newClientRef = clientRef.push(); // push direto na ref
    await newClientRef.set(clientObj); // set direto na ref nova
    return { id: newClientRef.key, ...clientObj };
  } catch (error) {
    throw error;
  }
};

export const getClientByIdService = async (clientId) => {
  try {
    const clientRef = db.ref(`clients/${clientId}`); // ref direto no db
    const snapshot = await clientRef.get(); // get direto na ref
    if (snapshot.exists()) {
      return { id: userId, ...snapshot.val() };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const updateClientService = async (clientId, updates) => {
  try {
    const clientRef = db.ref(`clients/${clientId}`);
    await clientRef.update(updates);
    return { id: clientId, ...updates };
  } catch (error) {
    throw error;
  }
};

export const deleteClientService = async (clientId) => {
  try {
    const clientRef = db.ref(`clients/${clientId}`);
    await clientRef.remove();
    return { id: clientId, deleted: true };
  } catch (error) {
    throw error;
  }
};

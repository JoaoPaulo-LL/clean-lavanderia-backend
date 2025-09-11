import { db } from "../config/firebase.js";

const clientRef = db.ref("clientes"); // chama ref direto no db

export const getClientByIdService = async (clientId) => {
  try {
    const clientRef = db.ref(`clientes/${clientId}`); // ref direto no db
    const snapshot = await clientRef.get(); // get direto na ref
    if (snapshot.exists()) {
      return { id: clientId, ...snapshot.val() };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const getAllClientService = async () => {
  try {
    const snapshot = await clientRef.get();

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([id, client]) => ({ id, ...client }));
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export const createClientService = async (clientObj) => {
  try {
    const newClientRef = clientRef.push();
    await newClientRef.set(clientObj);
    return { id: newClientRef.key, ...clientObj };
  } catch (error) {
    throw error;
  }
};

export const updateClientService = async (clientId, updates) => {
  try {
    const clientRef = db.ref(`clientes/${clientId}`);
    await clientRef.update(updates);
    return { id: clientId, ...updates };
  } catch (error) {
    throw error;
  }
};

export const deleteClientService = async (clientId) => {
  try {
    const clientRef = db.ref(`clientes/${clientId}`);
    await clientRef.remove();
    return { id: clientId, deleted: true };
  } catch (error) {
    throw error;
  }
};

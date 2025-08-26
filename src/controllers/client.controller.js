import {
  getClientByIdService,
  createClientService,
  updateClientService,
  deleteClientService,
} from "../services/client.service.js";

export const getClientById = async (req, resp) => {
  try {
    const clientId = req.params.id;

    const client = await getClientByIdService(clientId);

    if (client) {
      resp.status(200).json(client);
    } else {
      resp.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    throw error;
  }
};

export const createClient = async (req, resp) => {
  try {
    const clientObj = req.body;

    const newClient = await createClientService(clientObj);

    resp.status(201).json(newClient);
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};


export const updateClient = async (req, resp) => {
  try {
    const clientId = req.params.id;
    const updates = req.body;
    const updatedClient = await updateClientService(clientId, updates);
    resp.status(200).json(updatedClient);
  } catch (error) {
    resp.status(500).json({ message: "Error updating client", error: error.message });
  }
};

export const deleteClient = async (req, resp) => {
  try {
    const clientId = req.params.id;
    const result = await deleteClientService(clientId);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).json({ message: "Error deleting client", error: error.message });
  }
};

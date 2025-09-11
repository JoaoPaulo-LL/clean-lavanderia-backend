import {
  getClientByIdService,
  createClientService,
  updateClientService,
  deleteClientService,
  getAllClientService,
} from "../services/client.service.js";

import { apiResponse } from "../utils/apiResponse.js";

export const getClientAll = async (req, resp) => {
  try {
    const clients = await getAllClientService();

    if (!clients || clients.length === 0) {
      return resp
        .status(200)
        .json(apiResponse([], "Nenhum cliente encontrado!"));
    }
    resp
      .status(200)
      .json(apiResponse(clients, "Clientes encontrados com sucesso!"));
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao buscar clientes", error: error.message });
  }
};

export const getClientById = async (req, resp) => {
  try {
    const clientId = req.params.id;

    const client = await getClientByIdService(clientId);

    if (client) {
      resp
        .status(200)
        .json(apiResponse(client, "Cliente encontrado com sucesso!"));
    } else {
      resp.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao buscar cliente", error: error.message });
  }
};

export const createClient = async (req, resp) => {
  try {
    const clientObj = req.body;

    const newClient = await createClientService(clientObj);

    resp
      .status(201)
      .json(apiResponse(newClient, "Cliente criado com sucesso!"));
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
    resp
      .status(200)
      .json(apiResponse(updatedClient, "Cliente atualizado com sucesso!"));
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Error updating client", error: error.message });
  }
};

export const deleteClient = async (req, resp) => {
  try {
    const clientId = req.params.id;
    const result = await deleteClientService(clientId);
    resp.status(200).json(apiResponse(result, "Cliente removido com sucesso!"));
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Error deleting client", error: error.message });
  }
};

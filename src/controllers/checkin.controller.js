import {
  getAllCheckinService,
  getCheckinByIdService,
  createCheckinService,
  updateCheckinService,
  deleteCheckinService,
} from "../services/checkin.service.js";
import { apiResponse } from "../utils/apiResponse.js";

export const getCheckinAll = async (req, resp) => {
  try {
    const checkins = await getAllCheckinService();

    if (!checkins || checkins.length === 0) {
      return resp
        .status(200)
        .json(apiResponse([], "Nenhum check-in encontrado!"));
    }
    resp
      .status(200)
      .json(apiResponse(checkins, "Check-ins encontrados com sucesso!"));
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao buscar check-ins", error: error.message });
  }
};

export const getCheckinById = async (req, resp) => {
  try {
    const checkinId = req.params.id;
    const checkin = await getCheckinByIdService(checkinId);

    if (checkin) {
      resp
        .status(200)
        .json(apiResponse(checkin, "Check-in encontrado com sucesso!"));
    } else {
      resp.status(404).json({ message: "Check-in not found" });
    }
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao buscar check-in", error: error.message });
  }
};

export const createCheckin = async (req, resp) => {
  try {
    const checkinObj = req.body;
    const newCheckin = await createCheckinService(checkinObj);
    resp
      .status(201)
      .json(apiResponse(newCheckin, "Check-in criado com sucesso!"));
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao criar check-in", error: error.message });
  }
};

export const updateCheckin = async (req, resp) => {
  try {
    const checkinId = req.params.id;
    const checkinObj = req.body;
    const updatedCheckin = await updateCheckinService(checkinId, checkinObj);
    if (updatedCheckin) {
      resp
        .status(200)
        .json(apiResponse(updatedCheckin, "Check-in atualizado com sucesso!"));
    } else {
      resp.status(404).json({ message: "Check-in not found" });
    }
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao atualizar check-in", error: error.message });
  }
};

export const deleteCheckin = async (req, resp) => {
  try {
    const checkinId = req.params.id;
    const deleted = await deleteCheckinService(checkinId);
    if (deleted) {
      resp.status(200).json({ message: "Check-in deletado com sucesso!" });
    } else {
      resp.status(404).json({ message: "Check-in not found" });
    }
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Erro ao deletar check-in", error: error.message });
  }
};

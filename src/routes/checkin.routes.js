import express from "express";

import {
  getCheckinById,
  createCheckin,
  updateCheckin,
  deleteCheckin,
  getCheckinAll,
} from "../controllers/checkin.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/checkins:
 *   get:
 *     summary: Busca todos os check-ins
 *     tags:
 *       - Check-in
 *     responses:
 *       200:
 *         description: Lista de check-ins encontrada
 *       404:
 *         description: Nenhum check-in encontrado
 */
router.get("/api/v1/checkins", getCheckinAll);

/**
 * @swagger
 * /api/v1/checkins/{id}:
 *   get:
 *     summary: Busca um check-in por ID
 *     tags:
 *       - Check-in
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Check-in encontrado
 *       404:
 *         description: Check-in  não encontrado
 */
router.get("/api/v1/checkins/:id", getCheckinById);

/**
 * @swagger
 * /api/v1/checkins:
 *   post:
 *     summary: Cria um novo check-in
 *     tags:
 *         - Check-in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Check-in criado com sucesso
 */
router.post("/api/v1/checkins", createCheckin);

/**
 * @swagger
 * /api/v1/checkins/{id}:
 *   put:
 *     summary: Atualiza um check-in por ID
 *     tags:
 *       - Check-in
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Check-in atualizado com sucesso
 *       404:
 *         description: Check-in não encontrado
 */
router.put("/api/v1/checkins/:id", updateCheckin);

/**
 * @swagger
 * /api/v1/checkins/{id}:
 *   delete:
 *     summary: Remove um check-in por ID
 *     tags:
 *       - Check-in
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Check-in removido com sucesso
 *       404:
 *         description: Check-in não encontrado
 */
router.delete("/api/v1/checkins/:id", deleteCheckin);

export default router;

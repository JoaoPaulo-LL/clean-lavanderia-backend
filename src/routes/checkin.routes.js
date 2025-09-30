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
 *       - Check-in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: string
 *                 description: ID do cliente
 *                 example: "12345"
 *               dataHora:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do check-in
 *                 example: "2025-09-28T23:00:10Z"
 *               status:
 *                 type: string
 *                 description: Status do check-in
 *                 example: "ativo"
 *               itens:
 *                 type: object
 *                 properties:
 *                   descricao:
 *                     type: string
 *                     description: Descrição dos itens
 *                     example: "Serviço de limpeza"
 *                   quantidade:
 *                     type: integer
 *                     description: Quantidade de itens
 *                     example: 2
 *                   servico:
 *                     type: string
 *                     description: Tipo de serviço
 *                     example: "limpeza"
 *                   precoUnitario:
 *                     type: number
 *                     description: Preço unitário do item
 *                     example: 50.00
 *                   subtotal:
 *                     type: number
 *                     description: Subtotal dos itens
 *                     example: 100.00
 *             required:
 *               - clienteId
 *     responses:
 *       201:
 *         description: Check-in criado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/api/v1/checkins", createCheckin);

/**
 * @swagger
 * /api/v1/checkins/{id}:
 *   put:
 *     summary: Atualiza um check-in existente
 *     tags:
 *       - Check-in
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do check-in
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: string
 *                 description: ID do cliente
 *                 example: "12345"
 *               dataHora:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do check-in
 *                 example: "2025-09-28T23:00:10Z"
 *               status:
 *                 type: string
 *                 description: Status do check-in
 *                 example: "ativo"
 *               itens:
 *                 type: object
 *                 properties:
 *                   descricao:
 *                     type: string
 *                     description: Descrição dos itens
 *                     example: "Serviço de limpeza"
 *                   quantidade:
 *                     type: integer
 *                     description: Quantidade de itens
 *                     example: 2
 *                   servico:
 *                     type: string
 *                     description: Tipo de serviço
 *                     example: "limpeza"
 *                   precoUnitario:
 *                     type: number
 *                     description: Preço unitário do item
 *                     example: 50.00
 *                   subtotal:
 *                     type: number
 *                     description: Subtotal dos itens
 *                     example: 100.00
 *             required:
 *               - clienteId
 *     responses:
 *       200:
 *         description: Check-in atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Check-in não encontrado
 *       500:
 *         description: Erro interno do servidor
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

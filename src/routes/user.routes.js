import express from "express";
import { getUserById, createUser } from "../controllers/user.controller.js";

const router = express.Router();
/**
 * @swagger
 * api/v1/usuarios/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 *     tags:
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/usuarios/:id", getUserById);

/**
 * @swagger
 * api/v1/usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post("/usuarios", createUser);

export default router;

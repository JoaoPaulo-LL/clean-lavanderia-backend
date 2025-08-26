import express from "express";
import {
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/client.controller.js";

const router = express.Router();
/**
 * @swagger
 * api/v1/clientes/{id}:
 *   get:
 *     summary: Busca um cliente por ID
 *     tags:
 *       - Cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/api/v1/clientes/:id", getClientById);

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *         - cpf
 *         - endereco
 *       properties:
 *
 *         nome:
 *           type: string
 *           description: Nome completo do cliente
 *           example: Maria Oliveira
 *         email:
 *           type: string
 *           description: E-mail do cliente
 *           example: maria@email.com
 *         telefone:
 *           type: string
 *           description: Telefone de contato
 *           example: "11999999999"
 *         cpf:
 *           type: string
 *           description: CPF do cliente
 *           example: "123.456.789-00"
 *         endereco:
 *           type: object
 *           properties:
 *             rua:
 *               type: string
 *               example: Rua das Flores
 *             numero:
 *               type: string
 *               example: "100"
 *             bairro:
 *               type: string
 *               example: Centro
 *             cidade:
 *               type: string
 *               example: São Paulo
 *             estado:
 *               type: string
 *               example: SP
 *             cep:
 *               type: string
 *               example: "01000-000"
 *             complemento:
 *               type: string
 *               example: Apto 12
 *         dataCadastro:
 *           type: string
 *           format: date-time
 *           description: Data de cadastro do cliente
 *           example: "2025-08-25T10:00:00Z"
 *         observacoes:
 *           type: string
 *           description: Observações gerais
 *           example: Cliente VIP
 *         status:
 *           type: string
 *           description: Situação do cliente
 *           enum: [ativo, inativo]
 *           example: ativo
 *

 * /api/v1/clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags:
 *       - Cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *
 * /api/v1/clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     tags:
 *       - Cliente
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
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *
 *   delete:
 *     summary: Remove um cliente
 *     tags:
 *       - Cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente removido
 */
router.post("/api/v1/clientes", createClient);

router.put("/api/v1/clientes/:id", updateClient);

router.delete("/api/v1/clientes/:id", deleteClient);

export default router;

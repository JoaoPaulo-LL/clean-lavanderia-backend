import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import userRoutes from "./src/routes/user.routes.js";
import clientRoutes from "./src/routes/client.routes.js";
import testRoutes from "./src/routes/testRoutes.js";

// Importa a instância do banco de dados Firebase
import { db } from "./src/config/firebase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clean Lavanderia API",
      version: "1.0.0",
      description: "Documentação da API Clean Lavanderia",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Rotas
app.use(userRoutes);
app.use(clientRoutes);
app.use(testRoutes);

// Rota para documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});

import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import dotenv from "dotenv";
import serviceAccount from "../../projeto-lavanderia-f89b8-firebase-adminsdk-fbsvc-00796fdc1d.json" assert { type: "json" };

dotenv.config();

// Inicializa o Firebase Admin SDK
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Exporta a instância do banco de dados
export const db = getDatabase();

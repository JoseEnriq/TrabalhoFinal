// src/index.ts
import express from "express";
import router from "./router/routes";
import cors from "cors";

const app = express();

app.use(cors()); // Permitir todas as origens (padrão durante o desenvolvimento)
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 ");
});
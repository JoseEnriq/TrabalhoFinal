import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 3000;

const prisma = new PrismaClient();

// Middleware para processar JSON
app.use(express.json());

app.get("/", async (req, res) => {
    const allCategoria = await prisma.categoria.findMany();
    res.json(allCategoria);
});

// Inserir dados na tabela Categoria
app.post("/", async (req, res) => {
    try {
        const newCategoria = await prisma.categoria.create({data: req.body,});
        res.json(newCategoria);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Erro ao criar categoria", details: error });
    }
});

//atualizar dados na tabela categoria
app.put("/:id", async (req, res) => {
    const id = req.params.id;
    const newvalorLocacao = req.body.valorLocacao;
    const updatedCategoria = await prisma.categoria.update({
        where: {id: parseInt(id) }, 
        data: {valorLocacao: newvalorLocacao},
    });
    res.json(updatedCategoria);
});

// deletar dados na tabela categoria
app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedCategoria = await prisma.categoria.delete({
        where: {id: parseInt(id) }, 
    });
    res.json(deletedCategoria);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na portaa ${PORT}`);
});

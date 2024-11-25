import { Request, Response } from "express";
import { createMarca, getMarcas, deleteMarca, updateMarca } from "../models/marcaModel";

// Função para criar uma marca
export const postMarca = async (req: Request, res: Response) => {
  const { nome } = req.body;
  try {
    const marca = await createMarca(nome);
    res.json(marca);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar marca", error });
  }
};

// Função para listar todas as marcas
export const getMarca = async (req: Request, res: Response) => {
  try {
    const marcas = await getMarcas();
    res.json(marcas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar marcas", error });
  }
};

// Função para deletar uma marca
export const deleteMarcaController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const marcaDeletada = await deleteMarca(Number(id));
    res.json({ message: "Marca deletada com sucesso", marcaDeletada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar marca", error });
  }
};

// Função para atualizar uma marca
export const putMarca = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    const marcaAtualizada = await updateMarca(Number(id), nome);
    res.json({ message: "Marca atualizada com sucesso", marcaAtualizada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar marca", error });
  }
};

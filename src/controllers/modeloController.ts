import { Request, Response } from "express";
import { createModelo, getModelos, deleteModelo, updateModelo } from "../models/modeloModel";

// Função para criar um modelo
export const postModelo = async (req: Request, res: Response) => {
  const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
  try {
    const modelo = await createModelo(
      nome,
      anoModelo,
      qtModelo,
      categoriaId,
      marcaId
    );
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar modelo", error });
  }
};

// Função para listar todos os modelos
export const getModelo = async (req: Request, res: Response) => {
  try {
    const modelos = await getModelos();
    res.json(modelos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar modelos", error });
  }
};

// Função para deletar um modelo
export const deleteModeloController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const modeloDeletado = await deleteModelo(Number(id));
    res.json({ message: "Modelo deletado com sucesso", modeloDeletado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar modelo", error });
  }
};

// Função para atualizar um modelo
export const putModelo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
  try {
    const modeloAtualizado = await updateModelo(
      Number(id),
      nome,
      anoModelo,
      qtModelo,
      categoriaId,
      marcaId
    );
    res.json({ message: "Modelo atualizado com sucesso", modeloAtualizado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar modelo", error });
  }
};

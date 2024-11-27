import { Request, Response } from "express";
import { createCategoria, getCategorias, deleteCategoria, updateCategoria } from "../models/categoriaModel";

// Função para criar uma categoria
export const postCategoria = async (req: Request, res: Response) => {
  const { tipo, valorLocacao } = req.body;
  try {
    const categoria = await createCategoria(tipo, valorLocacao);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar categoria", error });
  }
};

// Função para listar todas as categorias
export const getCategoria = async (req: Request, res: Response) => {
  try {
    const categorias = await getCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar categorias", error });
  }
};

// Função para deletar uma categoria
export const deleteCategoriaController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoriaDeletada = await deleteCategoria(Number(id));
    res.json({ message: "Categoria deletada com sucesso", categoriaDeletada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar categoria", error });
  }
};

// Função para atualizar uma categoria
export const putCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tipo, valorLocacao } = req.body;
  try {
    const categoriaAtualizada = await updateCategoria(
      Number(id),
      tipo,
      valorLocacao
    );
    res.json({ message: "Categoria atualizada com sucesso", categoriaAtualizada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar categoria", error });
  }
};

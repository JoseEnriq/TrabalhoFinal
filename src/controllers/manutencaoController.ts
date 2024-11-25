import { Request, Response } from "express";
import {createManutencao, getManutencoes, deleteManutencao, updateManutencao } from "../models/manutencaoModel";

// Função para criar uma manutenção
export const postManutencao = async (req: Request, res: Response) => {
  const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
  try {
    const manutencao = await createManutencao(
      descricao,
      new Date(dataManutencao),
      valorManutencao,
      veiculoId
    );
    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar manutenção", error });
  }
};

// Função para listar todas as manutenções
export const getManutencao = async (req: Request, res: Response) => {
  try {
    const manutencoes = await getManutencoes();
    res.json(manutencoes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar manutenções", error });
  }
};

// Função para deletar uma manutenção
export const deleteManutencaoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const manutencaoDeletada = await deleteManutencao(Number(id));
    res.json({ message: "Manutenção deletada com sucesso", manutencaoDeletada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar manutenção", error });
  }
};

// Função para atualizar uma manutenção
export const putManutencao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const manutencaoAtualizada = await updateManutencao(Number(id), data);
    res.json({ message: "Manutenção atualizada com sucesso", manutencaoAtualizada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar manutenção", error });
  }
};
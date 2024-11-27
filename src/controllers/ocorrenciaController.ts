import { Request, Response } from "express";
import { createOcorrencia, getOcorrencias, deleteOcorrencia, updateOcorrencia } from "../models/ocorrenciaModel";

// Função para criar uma ocorrência
export const postOcorrencia = async (req: Request, res: Response) => {
  const { descricao, dataOcorrencia, valorOcorrencia, contratoId } = req.body;
  try {
    const ocorrencia = await createOcorrencia(
      descricao,
      new Date(dataOcorrencia),
      valorOcorrencia,
      contratoId
    );
    res.json(ocorrencia);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar ocorrência", error });
  }
};

// Função para listar todas as ocorrências
export const getOcorrencia = async (req: Request, res: Response) => {
  try {
    const ocorrencias = await getOcorrencias();
    res.json(ocorrencias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar ocorrências", error });
  }
};

// Função para deletar uma ocorrência
export const deleteOcorrenciaController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ocorrenciaDeletada = await deleteOcorrencia(Number(id));
    res.json({ message: "Ocorrência deletada com sucesso", ocorrenciaDeletada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar ocorrência", error });
  }
};

// Função para atualizar uma ocorrência
export const putOcorrencia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const ocorrenciaAtualizada = await updateOcorrencia(Number(id), data);
    res.json({ message: "Ocorrência atualizada com sucesso", ocorrenciaAtualizada });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar ocorrência", error });
  }
};
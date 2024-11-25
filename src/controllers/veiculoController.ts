import { Request, Response } from "express";
import { createVeiculo, getVeiculos, deleteVeiculo, updateVeiculo } from "../models/veiculoModel";

// Função para criar um veículo
export const postVeiculo = async (req: Request, res: Response) => {
  const { placa, chassi, anoFabricacao, cor, status, marcaId, modeloId } = req.body;
  try {
    const veiculo = await createVeiculo(
      placa,
      chassi,
      anoFabricacao,
      cor,
      status,
      marcaId,
      modeloId
    );
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar veículo", error });
  }
};

// Função para listar todos os veículos
export const getVeiculo = async (req: Request, res: Response) => {
  try {
    const veiculos = await getVeiculos();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar veículos", error });
  }
};

// Função para deletar um veículo
export const deleteVeiculoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const veiculoDeletado = await deleteVeiculo(Number(id));
    res.json({ message: "Veículo deletado com sucesso", veiculoDeletado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar veículo", error });
  }
};

// Função para atualizar um veículo
export const putVeiculo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const veiculoAtualizado = await updateVeiculo(Number(id), data);
    res.json({ message: "Veículo atualizado com sucesso", veiculoAtualizado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar veículo", error });
  }
};
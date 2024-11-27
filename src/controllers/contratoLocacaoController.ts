import { Request, Response } from "express";
import { createContratoLocacao, getContratosLocacao, deleteContratoLocacao, updateContratoLocacao } from "../models/contratoLocacaoModel";

// Função para criar um contrato de locação
export const postContratoLocacao = async (req: Request, res: Response) => {
  const { dataLocacao, dataDevolucao, valorCaucao, valorTotal, status } = req.body;
  try {
    const contrato = await createContratoLocacao(
      new Date(dataLocacao),
      new Date(dataDevolucao),
      valorCaucao,
      valorTotal,
      status
    );
    res.json(contrato);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar contrato de locação", error });
  }
};

// Função para listar todos os contratos de locação
export const getContratoLocacao = async (req: Request, res: Response) => {
  try {
    const contratos = await getContratosLocacao();
    res.json(contratos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar contratos de locação", error });
  }
};

// Função para deletar um contrato de locação
export const deleteContratoLocacaoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const contratoDeletado = await deleteContratoLocacao(Number(id));
    res.json({ message: "Contrato de locação deletado com sucesso", contratoDeletado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar contrato de locação", error });
  }
};

// Função para atualizar um contrato de locação
export const putContratoLocacao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const contratoAtualizado = await updateContratoLocacao(Number(id), data);
    res.json({ message: "Contrato de locação atualizado com sucesso", contratoAtualizado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar contrato de locação", error });
  }
};
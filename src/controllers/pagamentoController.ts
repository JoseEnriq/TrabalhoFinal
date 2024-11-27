import { Request, Response } from "express";
import { createPagamento, getPagamentos, deletePagamento, updatePagamento } from "../models/pagamentoModel";

// Função para criar um pagamento
export const postPagamento = async (req: Request, res: Response) => {
  const { data, valorPago, formaPagamento, contratoId } = req.body;
  try {
    const pagamento = await createPagamento(
      new Date(data),
      valorPago,
      formaPagamento,
      contratoId
    );
    res.json(pagamento);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pagamento", error });
  }
};

// Função para listar todos os pagamentos
export const getPagamento = async (req: Request, res: Response) => {
  try {
    const pagamentos = await getPagamentos();
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pagamentos", error });
  }
};

// Função para deletar um pagamento
export const deletePagamentoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pagamentoDeletado = await deletePagamento(Number(id));
    res.json({ message: "Pagamento deletado com sucesso", pagamentoDeletado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar pagamento", error });
  }
};

// Função para atualizar um pagamento
export const putPagamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const pagamentoAtualizado = await updatePagamento(Number(id), data);
    res.json({ message: "Pagamento atualizado com sucesso", pagamentoAtualizado });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar pagamento", error });
  }
};
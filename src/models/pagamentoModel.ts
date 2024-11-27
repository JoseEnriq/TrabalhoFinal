import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar um pagamento
export const createPagamento = async (
  data: Date,
  valorPago: number,
  formaPagamento: string,
  contratoId: number
) => {
  return await prisma.pagamento.create({
    data: {
      data,
      valorPago,
      formaPagamento,
      contratoId,
    },
  });
};

// Função para listar todos os pagamentos
export const getPagamentos = async () => {
  return await prisma.pagamento.findMany({
    include: { contrato: true }, // Inclui os dados do contrato relacionado
  });
};

// Função para deletar um pagamento
export const deletePagamento = async (id: number) => {
  return await prisma.pagamento.delete({
    where: { id },
  });
};

// Função para atualizar um pagamento
export const updatePagamento = async (
  id: number,
  data: {
    data?: Date;
    valorPago?: number;
    formaPagamento?: string;
    contratoId?: number;
  }
) => {
  return await prisma.pagamento.update({
    where: { id },
    data,
  });
};
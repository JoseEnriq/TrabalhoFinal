import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar um contrato de locação
export const createContratoLocacao = async (
  dataLocacao: Date,
  dataDevolucao: Date,
  valorCaucao: number,
  valorTotal: number,
  status: string
) => {
  return await prisma.contratoLocacao.create({
    data: {
      dataLocacao,
      dataDevolucao,
      valorCaucao,
      valorTotal,
      status,
    },
  });
};

// Função para listar todos os contratos de locação
export const getContratosLocacao = async () => {
  return await prisma.contratoLocacao.findMany();
};

// Função para deletar um contrato de locação
export const deleteContratoLocacao = async (id: number) => {
  return await prisma.contratoLocacao.delete({
    where: { id },
  });
};

// Função para atualizar um contrato de locação
export const updateContratoLocacao = async (
  id: number,
  data: {
    dataLocacao?: Date;
    dataDevolucao?: Date;
    valorCaucao?: number;
    valorTotal?: number;
    status?: string;
  }
) => {
  return await prisma.contratoLocacao.update({
    where: { id },
    data,
  });
};
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar uma ocorrência
export const createOcorrencia = async (
  descricao: string,
  dataOcorrencia: Date,
  valorOcorrencia: number,
  contratoId: number
) => {
  return await prisma.ocorrencia.create({
    data: {
      descricao,
      dataOcorrencia,
      valorOcorrencia,
      contratoId,
    },
  });
};

// Função para listar todas as ocorrências
export const getOcorrencias = async () => {
  return await prisma.ocorrencia.findMany({
    include: { contrato: true }, // Inclui os dados do contrato relacionado
  });
};

// Função para deletar uma ocorrência
export const deleteOcorrencia = async (id: number) => {
  return await prisma.ocorrencia.delete({
    where: { id },
  });
};

// Função para atualizar uma ocorrência
export const updateOcorrencia = async (
  id: number,
  data: {
    descricao?: string;
    dataOcorrencia?: Date;
    valorOcorrencia?: number;
    contratoId?: number;
  }
) => {
  return await prisma.ocorrencia.update({
    where: { id },
    data,
  });
};
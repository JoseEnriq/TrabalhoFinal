import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar uma manutenção
export const createManutencao = async (
  descricao: string,
  dataManutencao: Date,
  valorManutencao: number,
  veiculoId: number
) => {
  return await prisma.manutencao.create({
    data: {
      descricao,
      dataManutencao,
      valorManutencao,
      veiculoId,
    },
  });
};

// Função para listar todas as manutenções
export const getManutencoes = async () => {
  return await prisma.manutencao.findMany({
    include: { veiculo: true }, // Inclui os dados do veículo relacionado
  });
};

// Função para deletar uma manutenção
export const deleteManutencao = async (id: number) => {
  return await prisma.manutencao.delete({
    where: { id },
  });
};

// Função para atualizar uma manutenção
export const updateManutencao = async (
  id: number,
  data: {
    descricao?: string;
    dataManutencao?: Date;
    valorManutencao?: number;
    veiculoId?: number;
  }
) => {
  return await prisma.manutencao.update({
    where: { id },
    data,
  });
};
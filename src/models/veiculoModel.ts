import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar um veículo
export const createVeiculo = async (
  placa: string,
  chassi: string,
  anoFabricacao: number,
  cor: string,
  status: string,
  marcaId: number,
  modeloId: number
) => {
  return await prisma.veiculo.create({
    data: {
      placa,
      chassi,
      anoFabricacao,
      cor,
      status,
      marcaId,
      modeloId,
    },
  });
};

// Função para listar todos os veículos
export const getVeiculos = async () => {
  return await prisma.veiculo.findMany({
    include: { marca: true, modelo: true }, // Inclui os dados de Marca e Modelo relacionados
  });
};

// Função para deletar um veículo
export const deleteVeiculo = async (id: number) => {
  return await prisma.veiculo.delete({
    where: { id },
  });
};

// Função para atualizar um veículo
export const updateVeiculo = async (
  id: number,
  data: {
    placa?: string;
    chassi?: string;
    anoFabricacao?: number;
    cor?: string;
    status?: string;
    marcaId?: number;
    modeloId?: number;
  }
) => {
  return await prisma.veiculo.update({
    where: { id },
    data,
  });
};
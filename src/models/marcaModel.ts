import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar uma marca
export const createMarca = async (nome: string) => {
  return await prisma.marca.create({
    data: { nome },
  });
};

// Função para listar todas as marcas
export const getMarcas = async () => {
  return await prisma.marca.findMany();
};

// Função para deletar uma marca
export const deleteMarca = async (id: number) => {
  return await prisma.marca.delete({
    where: { id },
  });
};

// Função para atualizar uma marca
export const updateMarca = async (id: number, nome: string) => {
  return await prisma.marca.update({
    where: { id },
    data: { nome },
  });
};
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar um modelo
export const createModelo = async (
  nome: string,
  anoModelo: number,
  qtModelo: number,
  categoriaId: number,
  marcaId: number
) => {
  return await prisma.modelo.create({
    data: {
      nome,
      anoModelo,
      qtModelo,
      categoriaId,
      marcaId,
    },
  });
};

// Função para listar todos os modelos
export const getModelos = async () => {
  return await prisma.modelo.findMany({
    include: {
      categoria: true, // Inclui informações da categoria
      marca: true,     // Inclui informações da marca
    },
  });
};

// Função para deletar um modelo
export const deleteModelo = async (id: number) => {
  return await prisma.modelo.delete({
    where: { id },
  });
};

// Função para atualizar um modelo
export const updateModelo = async (
  id: number,
  nome: string,
  anoModelo: number,
  qtModelo: number,
  categoriaId: number,
  marcaId: number
) => {
  return await prisma.modelo.update({
    where: { id },
    data: {
      nome,
      anoModelo,
      qtModelo,
      categoriaId,
      marcaId,
    },
  });
};
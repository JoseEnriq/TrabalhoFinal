import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para criar uma categoria
export const createCategoria = async (tipo: string, valorLocacao: number) => {
  return await prisma.categoria.create({
    data: { tipo, valorLocacao },
  });
};

// Função para listar todas as categorias
export const getCategorias = async () => {
  return await prisma.categoria.findMany();
};

// Função para deletar uma categoria
export const deleteCategoria = async (id: number) => {
  return await prisma.categoria.delete({
    where: { id },
  });
};

// Função para atualizar uma categoria
export const updateCategoria = async (
  id: number,
  tipo: string,
  valorLocacao: number
) => {
  return await prisma.categoria.update({
    where: { id },
    data: { tipo, valorLocacao },
  });
};

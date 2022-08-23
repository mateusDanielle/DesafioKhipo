import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getProducts() {
  const products = await prisma.products.findMany();
  return products;
};

async function getProduct(id: string) {
  const product = await prisma.products.findUnique({
    where: { id },
  });
  
  return product;
};

async function postProduct(name: string, price: string, brand: string, image: string) {
  const product = await prisma.products.create({
    data: {
      name, price, brand, image
    }
  });
  
  return product;
};

async function updateProduct(id: string, name: string, price: string, brand: string, image: string) {
  const product = await prisma.products.update({
    where: { id },
    data: {
      name, price, brand, image
    }
  });
  
  return product;
};

async function deleteProduct(id: string) {
  const product = await prisma.products.delete({
    where: { id },
  });
  
  return product;
};

export { getProducts, getProduct, postProduct, updateProduct, deleteProduct };
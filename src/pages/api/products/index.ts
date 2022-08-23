import { NextApiRequest, NextApiResponse } from 'next';

import { getProducts, postProduct } from '../../../services/prisma'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const products = getProducts();

    return response.status(200).json({ products });
  };
  if (request.method === 'POST') {
    const { name, price, brand, image } = request.body;
    const product = postProduct(name, price, brand, image);

    return response.status(201).json({ product });
  };
};
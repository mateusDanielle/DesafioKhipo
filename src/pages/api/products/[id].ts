import { NextApiRequest, NextApiResponse } from 'next';

import { getProduct, updateProduct, deleteProduct } from '../../../services/prisma'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  if (request.method === 'GET') {
    const product = getProduct(id);

    return response.status(200).json({ product });
  };

  if (request.method === 'PATCH') {
    const { name, price, brand, image } = request.body;
    const product = updateProduct(id, name, price, brand, image);

    return response.status(200).json({ product });
  };

  if (request.method === 'DELETE') {
    const req = deleteProduct(id);

    return response.status(200).json({ req });
  };
};
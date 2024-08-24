import apiInstance from '../services/api.js';

export const getProducts = async () => {
  try {
    const response = await apiInstance('/products');
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async id => {
  try {
    const response = await apiInstance(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

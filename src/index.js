import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createMarkUpProducts } from './services/markupService';

const productsList = document.querySelector('#allProducts');

const renderProducts = async () => {
  const products = await getProducts();
  const markUpProducts = createMarkUpProducts(products);
  productsList.innerHTML = markUpProducts;
};

renderProducts();

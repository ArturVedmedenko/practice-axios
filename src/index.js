import './styles/normalize.css';
import './styles/index.css';
import { getProducts, getProductById } from './requests/products';
import {
  createMarkUpProducts,
  createMarkUpProduct,
} from './services/markupService';

const productsList = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
const renderProducts = async () => {
  const products = await getProducts();
  const markUpProducts = createMarkUpProducts(products);
  productsList.innerHTML = markUpProducts;
};

const onSubmittSingleForm = async event => {
  event.preventDefault();
  const id = event.target.elements.id.value;

  const product = await getProductById(id);
  const markUpProduct = createMarkUpProduct(product);
  singleProduct.innerHTML = markUpProduct;
};

// renderProducts();

singleProductForm.addEventListener('submit', onSubmittSingleForm);

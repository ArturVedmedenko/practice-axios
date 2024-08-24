import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';

getProducts().then(data => console.log(data));

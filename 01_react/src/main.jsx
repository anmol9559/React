import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import AppForProduct from './AppForProduct.jsx'
import ProductsCard from './ProductsCard.jsx'


createRoot(document.getElementById('root')).render(<AppForProduct />)

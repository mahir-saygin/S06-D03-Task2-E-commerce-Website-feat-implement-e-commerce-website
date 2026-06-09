import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';

export default function Products(props) {
  /* ADIM 5: App component'inden gelen propu burada destruct edelim. aynı isimler kullanalım */
  const [products, setProducts] = useState([]);

  /* ADIM 6: componenDidUpdate event'ini sadece category prop'una bağımlı olarak dinleyelim. 
  İlgili Kategoriye ait ürünleri almak için 'https://fakestoreapi.com/products/category/jewellery' şeklinde endpoint'e istek atalım ve response'daki data'yı products state'ine ekleyelim.
  */

  return (
    <div className="main-area">
      <h2>{category.toUpperCase()}</h2>
      <div className="products-container">
        <ProductList products={products} />
      </div>
    </div>
  );
}

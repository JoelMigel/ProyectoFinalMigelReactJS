import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {

  const products = [
    { id: 1, name: 'Producto 1', price: 20 },
    { id: 2, name: 'Producto 2', price: 30 },
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/category/${category.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;

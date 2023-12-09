import React from 'react';

const ItemDetailContainer = ({ match }) => {

  const productId = match.params.id;
  const product = { id: productId, name: `Producto ${productId}`, price: 25 };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>{product.name} - ${product.price}</p>
    </div>
  );
};

export default ItemDetailContainer;

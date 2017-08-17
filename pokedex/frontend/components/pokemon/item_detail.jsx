import React from 'react';

const ItemDetail = ({ name, happiness, price }) => {
  return (
    <div>
      <h4>{ name }</h4>
      <p>Happiness: { happiness }</p>
      <p>Price: { price }</p>
    </div>
  );
};

export default ItemDetail;

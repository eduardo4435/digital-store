import React from 'react';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      {priceDiscount ? (
        <div className="product-price">
          <span className="price-discounted">{priceDiscount}</span>
          <span className="price-original">{price}</span>
        </div>
      ) : (
        <span className="product-price">{price}</span>
      )}
    </div>
  );
};

export default ProductCard;

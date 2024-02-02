import React from 'react';
import ProductCompany from './ProductCompany';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

const ProductCard: React.FC<{
  companyName: string;
  productName: string;
  description: string;
  price: number;
  promo: boolean;
}> = ({ companyName, productName, description, price, promo }) => (
  <div className="product-card">
    <ProductCompany companyName={companyName} />
    <ProductName productName={productName} />
    <ProductDescription description={description} />
    <ProductPrice price={price} promo={promo} />
  </div>
);

export default ProductCard;

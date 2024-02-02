interface ProductNameProps {
  productName: string;
}

const ProductName: React.FC<ProductNameProps> = ({ productName }) => (
  <h2 className="product-name pb-8 dark:text-white font-semibold text-5xl">
    {productName}
  </h2>
);

export default ProductName;

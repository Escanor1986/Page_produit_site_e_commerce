interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => (
  <p className="product-description pb-6 text-black/50 dark:text-white">
    {description}
  </p>
);

export default ProductDescription;

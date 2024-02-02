interface ProductCompanyProps {
  companyName: string;
}

const ProductCompany: React.FC<ProductCompanyProps> = ({ companyName }) => (
  <div className="product-company">
    {' '}
    <h1 className="pb-4 text-lg text-orange-500 font-medium">
      {companyName.toLocaleUpperCase()}
    </h1>
  </div>
);

export default ProductCompany;

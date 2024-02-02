interface AddProductButtonProps {
  handleAddToCartClick: () => void;
}

const AddProductButton: React.FC<AddProductButtonProps> = ({
  handleAddToCartClick,
}) => (
  <button
    onClick={handleAddToCartClick}
    className="add-to-cart-button w-4/6 ml-2 pb-3 pt-3 cursor-pointer add-to-cart-input flex flex-grow items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-300"
  >
    <i className="pr-4 fa-solid fa-cart-shopping text-white"></i>
    <p className="text-white">Add to cart</p>
  </button>
);

export default AddProductButton;

interface MinusButtonProps {
  handleMinusClick: () => void;
}

const MinusButton: React.FC<MinusButtonProps> = ({ handleMinusClick }) => (
  <button
    className="minus-button pl-3 pr-3 text-2xl font-semibold cursor-pointer bg-transparent text-orange-400 hover:text-orange-300 border-transparent border-0"
    onClick={handleMinusClick}
  >
    -
  </button>
);

export default MinusButton;

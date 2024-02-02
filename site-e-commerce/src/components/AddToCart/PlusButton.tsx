interface PlusButtonProps {
  handlePlusClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ handlePlusClick }) => (
  <button
    className="plus-button pl-3 pr-3 text-xl font-semibold cursor-pointer bg-transparent text-orange-400 hover:text-orange-300 border-transparent border-0"
    onClick={handlePlusClick}
  >
    +
  </button>
);

export default PlusButton;

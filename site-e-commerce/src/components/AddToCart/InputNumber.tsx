interface InputNumberProps {
  inputNumber: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  inputNumber,
  handleChange,
}) => (
  <input
    className="w-1/3 font-bold cart-input bg-transparent border-transparent border-0 text-center"
    type="text"
    placeholder="0"
    value={inputNumber}
    onChange={handleChange}
  />
);

export default InputNumber;

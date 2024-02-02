import React, { useState } from 'react';
import { useArticleContext } from '../../contexts/useArticleContext';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import InputNumber from './InputNumber';
import AddProductButton from './AddProductButton';

const AddToCart: React.FC<{ articleId: number }> = ({ articleId }) => {
  const { articles, setNumber } = useArticleContext();

  const article = articles.find(article => article.id === articleId);
  const articleNumber = article ? article.numberOfArticle : 0;

  const [inputNumber, setInputNumber] = useState(articleNumber);

  const handleMinusClick = () => {
    if (inputNumber > 0) {
      setInputNumber(inputNumber - 1);
    }
  };

  const handlePlusClick = () => {
    setInputNumber(inputNumber + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setInputNumber(newValue);
    }
  };

  const handleAddToCartClick = () => {
    setNumber(articleId, inputNumber);
  };

  return (
    <section>
      <div className="pt-8 cart-input-wrapper flex items-center">
        <div className="w-2/6 mr-2 pb-2 pt-2 flex items-center justify-between number-cart-input border-cart-button-input rounded-lg bg-cart-button-input">
          <MinusButton handleMinusClick={handleMinusClick} />
          <InputNumber inputNumber={inputNumber} handleChange={handleChange} />
          <PlusButton handlePlusClick={handlePlusClick} />
        </div>
        <AddProductButton handleAddToCartClick={handleAddToCartClick} />
      </div>
    </section>
  );
};

export default AddToCart;

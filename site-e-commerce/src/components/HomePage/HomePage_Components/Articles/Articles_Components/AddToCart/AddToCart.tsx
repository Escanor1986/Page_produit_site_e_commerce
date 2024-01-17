import React, { useState } from 'react';
import './AddToCart.css';

interface AddToCartProps {
  number: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ number }) => {
  const [articleNumber, setArticleNumber] = useState(number);

  const handleMinusClick = () => {
    setArticleNumber(nbr => nbr - 1);
  };

  const handlePlusClick = () => {
    setArticleNumber(nbr => nbr + 1);
  };

  console.log('test');
  console.log('test');
  console.log('test');

  return (
    <>
      <section>
        <div className="pt-8 cart-input-wrapper flex items-center">
          <div className="w-2/6 mr-2 pb-2 pt-2 flex items-center justify-between number-cart-input border-cart-button-input rounded-lg bg-cart-button-input">
            <button
              className="minus-button pl-3 pr-3 text-2xl font-semibold cursor-pointer bg-transparent text-orange-400 hover:text-orange-300 border-transparent border-0"
              onClick={handleMinusClick}
            >
              -
            </button>
            <input
              className="w-1/3 font-bold cart-input bg-transparent border-transparent border-0 text-center"
              type="text"
              placeholder="0"
              value={articleNumber}
            ></input>
            <button
              className="plus-button pl-3 pr-3 text-xl font-semibold cursor-pointer bg-transparent text-orange-400 hover:text-orange-300 border-transparent border-0"
              onClick={handlePlusClick}
            >
              +
            </button>
          </div>
          <div className="w-4/6 ml-2 pb-3 pt-3 cursor-pointer add-to-cart-input flex flex-grow items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-300">
            <i className="pr-4 fa-solid fa-cart-shopping text-white"></i>
            <p className="text-white">Add to cart</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;

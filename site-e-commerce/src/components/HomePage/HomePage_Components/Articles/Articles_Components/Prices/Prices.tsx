import React from 'react';

interface PricesProps {
  price: number;
  promo: boolean;
}

const Prices: React.FC<PricesProps> = ({ price, promo }) => {
  return (
    <>
      <section>
        <div className="dark:text-white pb-8 flex items-center">
          <p className="pr-4 font-bold flex text-4xl">
            ${promo ? (price / 2).toFixed(2) : price.toFixed(2)}
          </p>
          {promo ? (
            <p className="article-promo flex justify-center rounded-lg font-medium text-orange-600/90 bg-orange-200">
              50%
            </p>
          ) : null}
        </div>
        {promo ? (
          <p className="text-black/45 dark:text-white line-through">
            ${price.toFixed(2)}
          </p>
        ) : null}
      </section>
    </>
  );
};

export default Prices;

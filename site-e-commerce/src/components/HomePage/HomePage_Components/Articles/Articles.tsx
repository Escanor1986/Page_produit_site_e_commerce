import React from 'react';
import './Articles.css';
import { Article } from '../../../../data/data';
import Prices from './Articles_Components/Prices/Prices';
import AddToCart from './Articles_Components/AddToCart/AddToCart';
// import { useArticleContext } from '../../../../contexts/useArticleContext';

interface ArticleProps {
  data: Article[];
}

const ArticleComponent: React.FC<ArticleProps> = ({ data }) => {
  const firstArticle = data[0];

  if (!firstArticle) {
    return <div>Aucun article trouvé</div>;
  }

  return (
    <div className="article-wrapper p-12 flex flex-col justify-between">
      <h1 className="pb-4 text-lg text-orange-500 font-medium">
        {firstArticle.company.toLocaleUpperCase()}
      </h1>
      <p className="pb-8 dark:text-white font-semibold text-5xl">
        {firstArticle.name}
      </p>
      <p className="pb-6 text-black/50 dark:text-white">
        {firstArticle.description}
      </p>
      <Prices price={firstArticle.price} promo={firstArticle.promo} />
      <AddToCart articleId={firstArticle.id} />
    </div>
  );
};

export default ArticleComponent;

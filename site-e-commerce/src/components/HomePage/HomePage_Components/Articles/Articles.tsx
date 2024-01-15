import React from 'react';
import { Article } from '../../../../data/data';

interface ArticleProps {
  data: Article[];
}

const ArticleComponent: React.FC<ArticleProps> = ({ data }) => {
  const firstArticle = data[0];

  if (!firstArticle) {
    return <div>Aucun article trouvé</div>;
  }

  return (
    <div className="p-12 flex flex-col justify-between">
      <h1 className="pb-4 text-orange-500 font-medium">
        {firstArticle.company.toLocaleUpperCase()}
      </h1>
      <p className="pb-8 font-bold text-4xl">{firstArticle.name}</p>
      <p className="pb-6 text-black/50">{firstArticle.description}</p>
      <div className="pb-8 flex">
        <p className="font-bold text-3xl">
          $
          {firstArticle.promo
            ? (firstArticle.price / 2).toFixed(2)
            : firstArticle.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ArticleComponent;

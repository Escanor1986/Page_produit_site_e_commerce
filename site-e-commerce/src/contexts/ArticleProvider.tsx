import React, { createContext, useState, ReactNode } from 'react';
import { Article } from '../data/data';
import ArticleList from '../data/data';

export interface ArticleContextType {
  articles: Article[];
  setNumber: (articleId: number, nbr: number) => void;
}

export const ArticleContext = createContext<ArticleContextType>({
  articles: ArticleList,
  setNumber: () => {},
});

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider: React.FC<ArticleProviderProps> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>(ArticleList);

  const setNumber = (articleId: number, nbr: number) => {
    setArticles(currentArticles => {
      return currentArticles.map(article => {
        if (article.id === articleId) {
          console.log(`test setArticles current id: ${article.id}`);
          return { ...article, numberOfArticle: nbr };
        } else {
          console.log(`test setArticles others id: ${article.id}`);
          return article;
        }
      });
    });
  };

  return (
    <ArticleContext.Provider value={{ articles, setNumber }}>
      {children}
    </ArticleContext.Provider>
  );
};

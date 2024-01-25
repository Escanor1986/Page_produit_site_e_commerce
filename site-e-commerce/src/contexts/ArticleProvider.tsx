import React, { createContext, useState, ReactNode } from 'react';
import { Article } from '../Data/data';
import ArticleList from '../Data/data';

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

  const setNumber = (articleId: number = 0, nbr: number) => {
    setArticles(currentArticles =>
      currentArticles.map(article =>
        article.id === articleId
          ? { ...article, numberOfArticle: nbr }
          : article
      )
    );
  };

  return (
    <ArticleContext.Provider value={{ articles, setNumber }}>
      {children}
    </ArticleContext.Provider>
  );
};

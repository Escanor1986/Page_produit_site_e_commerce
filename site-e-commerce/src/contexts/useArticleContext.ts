import { useContext } from 'react';
import { ArticleContext } from './ArticleProvider';

// useArticleContext est séparé de ArticleContext pour éviter cette erreur :
// "Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components."
export const useArticleContext = () => useContext(ArticleContext);

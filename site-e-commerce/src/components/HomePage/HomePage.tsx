import './HomePage.css';
import ArticleComponent from './HomePage_Components/Articles/Articles';
import articleList from '../../Data/data';

function HomePage() {
  return (
    <>
      <main className="cart-wrapper flex flex-row">
        <div className="left-cart-content  bg-orange-400"></div>
        <div className="right-cart-content">
          <ArticleComponent data={articleList} />
        </div>
      </main>
    </>
  );
}

export default HomePage;

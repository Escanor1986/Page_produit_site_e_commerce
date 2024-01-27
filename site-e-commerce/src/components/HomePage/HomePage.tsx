import './HomePage.css';
import ArticleComponent from './HomePage_Components/Articles/Articles';

function HomePage() {
  return (
    <>
      <main className="cart-wrapper flex flex-row">
        <div className="left-cart-content  bg-orange-400"></div>
        <div className="right-cart-content">
          <ArticleComponent />
        </div>
      </main>
    </>
  );
}

export default HomePage;

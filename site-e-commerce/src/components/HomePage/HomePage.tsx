import './HomePage.css';
import ArticleComponent from './HomePage_Components/Articles/Articles';
import { Carousel } from './HomePage_Components/Carousel/Carousel';

function HomePage() {
  return (
    <>
      <main className="cart-wrapper flex flex-row">
        <div className="left-cart-content flex items-center">
          <Carousel />
        </div>
        <div className="right-cart-content">
          <ArticleComponent />
        </div>
      </main>
    </>
  );
}

export default HomePage;

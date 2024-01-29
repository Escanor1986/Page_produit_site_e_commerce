import ArticleComponent from '../../Components/Articles/Articles';
import { Carousel } from '../../Components/Carousel/Carousel';

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

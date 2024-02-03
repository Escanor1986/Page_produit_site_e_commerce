import { Suspense, lazy } from 'react';
import ProductCard from '../../components/ProductDescription';
// import { Carousel } from '../../Components/Carousel/Carousel';
import AddToCart from '../../components/AddToCart';
import { useArticleContext } from '../../contexts/useArticleContext';

const Image = lazy(() => import('../../components/Carousel/Carousel'));

function HomePage() {
  const { articles } = useArticleContext();
  const firstArticle = articles[0];

  if (!firstArticle) {
    return <div>Aucun article trouvé</div>;
  }

  return (
    <>
      <main className="cart-wrapper flex flex-row">
        <div className="left-cart-content flex items-center">
          <Suspense
            fallback={<i className="fa-regular fa-spinner fa-spin"></i>}
          >
            <Image />
          </Suspense>
        </div>
        <div className="right-cart-content p-12 flex flex-col justify-between">
          <ProductCard
            companyName={firstArticle.company}
            productName={firstArticle.name}
            description={firstArticle.description}
            price={firstArticle.price}
            promo={firstArticle.promo}
          />
          <AddToCart articleId={firstArticle.id} />
        </div>
      </main>
    </>
  );
}

export default HomePage;

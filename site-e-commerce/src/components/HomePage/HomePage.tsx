import './HomePage.css';

function HomePage() {
  return (
    <>
      <main className="cart-wrapper flex flex-row bg-cyan-100">
        {/* Left cart component to cut off */}
        <div className="left-cart-content  bg-orange-400"></div>
        {/* Right cart component to cut off */}
        <div className="right-cart-content bg-green-400"></div>
      </main>
    </>
  );
}

export default HomePage;

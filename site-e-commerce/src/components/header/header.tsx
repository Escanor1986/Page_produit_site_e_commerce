import './Header.css';
import profilLogo from '../../assets/pictureAvatarReduceSize.png';
import cart from '../../assets/cart.png';

const navList: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Header() {
  const navItems = navList.map((item, index) => (
    <li className="li-header" key={index}>
      {item}
    </li>
  ));

  return (
    <>
      <header className="pl-4 pr-4 min-h-32 border-b-2 border-b-header-border-color flex justify-between items-center">
        <section className="flex flex-row items-center">
          <h1 className="text-black text-3xl font-bold mr-12">sneakers</h1>
          <ul className="flex flex-row items-center space-x-10">{navItems}</ul>
        </section>
        <section className="flex flex-row">
          <ul className="flex flex-row space-x-10 items-center">
            <li className="cursor-pointer">
              <div className="cart-nav-frame">
                <img
                  className="cart-nav w-6 h-6 hover:scale-110 transition duration-300"
                  src={cart}
                  alt="cart"
                />
              </div>
            </li>
            <li className="cursor-pointer">
              <div className="logo-nav-frame">
                <img
                  className="logo-nav w-12 h-12 rounded-full hover:ring-2 hover:ring-orange-500 transition duration-300"
                  src={profilLogo}
                  alt="profil picture"
                />
              </div>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}

export default Header;

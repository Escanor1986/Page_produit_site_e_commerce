import './Header.css';
import profilLogo from '../../assets/pictureAvatarReduceSize.png';
import Portal from './Header_Components/Portal/Portal';
import { useThemeContext } from '../../contexts/useThemeContext';

const navList: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Header() {
  const navItems = navList.map((item, index) => (
    <li className="li-header" key={index}>
      {item}
    </li>
  ));

  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <>
      <header className="mx-8 px-8 pl-4 pr-4 border-b-2 border-b-header-border-color flex justify-between items-center">
        <section className="flex flex-row items-center">
          <h1 className="text-black dark:text-white text-3xl font-bold mr-12">
            sneakers
          </h1>
          <ul className="flex flex-row items-center space-x-10">{navItems}</ul>
        </section>
        <section className="flex flex-row">
          <ul className="flex flex-row space-x-10 items-center">
            <li>
              {/* Dark / Light Mode */}
              <button
                onClick={toggleTheme}
                className="toggle-theme-button flex flex-row space-x-2 items-center rounded-lg border-0 border-transparent cursor-pointer text-slate-100 bg-slate-700 p-3 dark:text-slate-700 dark:bg-slate-100 "
              >
                <span>Go {darkMode ? 'Light' : 'Dark'}</span>
                {darkMode ? (
                  <i className="fa-regular fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </button>
            </li>
            <li className="cursor-pointer">
              <div className="cart-nav-frame">
                <Portal />
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

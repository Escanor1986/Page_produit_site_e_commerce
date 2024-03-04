import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';
import ProfileImage from './ProfileImage';
import CartIndicator from './CartIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../contexts/useThemeContext';

const navList = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Header() {
  const { toggleTheme, darkMode } = useThemeContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="opened-modal-wrapper mx-8 px-8 pl-4 pr-4 border-b-2 border-b-header-border-color flex justify-between items-center">
        <section className="flex flex-row items-center">
          <Link to="/">
            <h1 className="text-black dark:text-white text-3xl font-bold mr-12">
              sneakers
            </h1>
          </Link>
          <ul className="header-nav-items flex flex-row items-center space-x-10">
            {navList.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </section>
        <section className="theme-cart-profile flex flex-row">
          <ul className="flex flex-row space-x-10 items-center">
            <li>
              <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
            </li>
            <li>
              <CartIndicator />
            </li>
            <li>
              <ProfileImage />
            </li>
            <li className="mobile-menu-icon" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </section>
      </header>
      {isMobileMenuOpen && (
        <div className="div-mobile-menu flex justify-center w-full">
          <ul className="flex space-x-10">
            {navList.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

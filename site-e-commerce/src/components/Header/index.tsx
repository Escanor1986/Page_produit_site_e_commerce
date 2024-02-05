import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';
import ProfileImage from './ProfileImage';
import CartIndicator from './CartIndicator';
import { useThemeContext } from '../../contexts/useThemeContext';

const navList: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Header() {
  const { toggleTheme, darkMode } = useThemeContext();

  const navItems = navList.map((item, index) => (
    <NavItem key={index} item={item} />
  ));

  return (
    <>
      <header className="mx-8 px-8 pl-4 pr-4 border-b-2 border-b-header-border-color flex justify-between items-center">
        <section className="flex flex-row items-center">
          <Link to="/">
            <h1 className="text-black dark:text-white text-3xl font-bold mr-12">
              sneakers
            </h1>
          </Link>
          <ul className="flex flex-row items-center space-x-10">{navItems}</ul>
        </section>
        <section className="flex flex-row">
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
          </ul>
        </section>
      </header>
    </>
  );
}

export default Header;

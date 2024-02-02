interface NavListProps {
  navItems: JSX.Element[];
}

function NavList({ navItems }: NavListProps) {
  return <ul className="flex flex-row items-center space-x-10">{navItems}</ul>;
}

export default NavList;

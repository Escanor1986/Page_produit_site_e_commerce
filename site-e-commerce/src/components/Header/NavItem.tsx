interface NavItemProps {
  item: string;
}

function NavItem({ item }: NavItemProps) {
  return <li className="li-header">{item}</li>;
}

export default NavItem;

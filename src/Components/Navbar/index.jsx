import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, activeStyle }) => {
  return (
    // Use la etiqueta NavLink y le pasé las propiedades to y className
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};
const Navbar = () => {
  const activeStyle = "underline";
  return (
    <nav className="flex justify-between items-center top-0 fixed z-10  w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to="/" activeStyle={activeStyle}>
            Shopi
          </NavItem>
        </li>

        <li>
          <NavItem to="/" activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to="/clothes" activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to="/eletronics" activeStyle={activeStyle}>
            Eletronics
          </NavItem>
        </li>
        <li>
          <NavItem to="/furnitures" activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to="/toys" activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to="/others" activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center  gap-3">
        <li className="text-black/60">yanpidev@gmail.com</li>
        <li>
          <NavItem to="/" activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to="/my-orders" activeStyle={activeStyle}>
            My orders
          </NavItem>
        </li>
        <li>
          <NavItem to="/my-account" activeStyle={activeStyle}>
            My accounnt
          </NavItem>
        </li>
        <li>
          <NavItem to="/sign-In" activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        <li>
          <NavItem>🛒 0</NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

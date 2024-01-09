import "../components/scss/nav.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Products
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Form
      </NavLink>
    </nav>
  );
};

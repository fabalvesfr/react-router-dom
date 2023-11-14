import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      {" "}
      {/* Navbar goes in Router component */}
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
};

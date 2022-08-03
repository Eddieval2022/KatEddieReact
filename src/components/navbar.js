import { Navigate } from "react-router-dom";
import { LinkStyled } from "../styles/navbarstyled";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      <LinkStyled to="/home">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
      <button
        onClick={() => {
          setter();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </button>
      {/* </NavStyled> */}
    </nav>
  );
};

export default Navbar;

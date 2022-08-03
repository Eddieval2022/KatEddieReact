import { Navigate } from "react-router-dom";
import { LinkStyled, NavStyled } from "../styles/navbarstyled";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      <NavStyled>
      <LinkStyled to="/home">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/kat">Kat</LinkStyled>
      <LinkStyled to="/eddie">Eddie</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
      <button
        onClick={() => {
          setter();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </button>
      </NavStyled>
    
    </nav>
  );
};

export default Navbar;

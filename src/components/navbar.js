import { Navigate } from "react-router-dom";

import { LinkStyled, NavButton, NavStyled } from "../styles/navbarstyled";


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
        <NavButton
          onClick={() => {
            setter();
            localStorage.removeItem("myToken");
          }}
        >
          Log Out
        </NavButton>
      </NavStyled>
    </nav>
  );
};

export default Navbar;

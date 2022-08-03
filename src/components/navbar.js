import { Navigate } from "react-router-dom";
import { LoginButs } from "../styles/appstyled";
import { LinkStyled } from "../styles/navbarstyled";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      <LinkStyled to="/home">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
      <LoginButs
        onClick={() => {
          setter();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </LoginButs>
      {/* </NavStyled> */}
    </nav>
  );
};

export default Navbar;

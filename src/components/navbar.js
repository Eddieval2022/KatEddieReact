import { Link, Navigate } from "react-router-dom";
import { LiStyled, NavStyled } from "../styles/navbarstyled";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      
      <NavStyled>
      
        <LiStyled>
          <Link to="/home">Home</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/about">About</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/contact">Contact</Link>
        </LiStyled>
        
        <LiStyled
          onClick={() => {
            setter();
            localStorage.removeItem("myToken");
          }}
        >
          Log Out
        </LiStyled>
      
    </NavStyled>
    </nav>
  );
};

export default Navbar;

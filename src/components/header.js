import { HeaderStyle,  HeaderH2 } from "../styles/headersyled";
import image from "../images/LOGO.png"

const Header = () => {
  return (
    <HeaderStyle>
      <img src={image} alt="logo" />
      <HeaderH2>Developed by Kat & Eddie</HeaderH2>
    </HeaderStyle>
  );
};

export default Header;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  color: #1c41b0;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
 font-weight: bold;
  margin: 25px;
`;

export const NavButton = styled.button`
  color: #1c41b0;
  text-decoration: none;
   font-size: 20px;
   font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px;
  padding-bottom: 45px;
  
`;

// export const LiStyled = styled.li`
//   cursor: pointer;
//   transition: all 0.2s linear 0s;
//   color: #1c41b0;
//   height: 48px;
//   width: 100px;
//   padding-top: 20px;
//   padding-left: 24px;
//   padding-right: 24px;
//   border-radius: 40px;
//   font-weight: 700;
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  color: #1c41b0;
  padding: 10px;
  text-decoration: none;
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  margin: 45px;
  font-size: 20px;
  font-weight: bold;
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

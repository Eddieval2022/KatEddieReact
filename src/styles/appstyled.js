import styled from "styled-components";
import myImage from "../images/Back.jpg"
export const TheApp = styled.div`
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgb(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.6)
  ), url(${myImage});
 
`;

export const LoginButs = styled.button`
  font-family: sans-serif;
  background-color: transparent;
  border: none;
  color: #1c41b0;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Content = styled.div`
  text-align: center;
  min-height: 800px;
`;

export const LogForm = styled.div`
  padding-top: 70px;
`;

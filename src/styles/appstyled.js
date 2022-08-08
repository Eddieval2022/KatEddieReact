import styled from "styled-components";
import myImage from "../images/Code.png"
export const TheApp = styled.div`
  text-align: center;

 
`;

export const Background = styled.div`
background-image: linear-gradient(
  to bottom,
  rgb(255, 255, 255, 0.99),
  rgba(255, 255, 255, 0.9)
), url(${myImage});

`

export const LoginButs = styled.button`
  font-family: sans-serif;
  font-weight: bold;
  background-color: transparent;
  border: solid 1px;
  box-shadow: 5px 3px 1px;
  border-radius: 7px;
  color: #0B4A79;
  padding: 5px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-left: 15px
`;

export const Content = styled.div`
  text-align: center;
  min-height: 800px;
`;

export const LogForm = styled.div`
  padding-top: 200px;
`;
export const Input = styled.input`
 border-radius: 5px;
 padding: 3px 10px;
 font-size: 16px;
//  border: solid 1px;
margin-bottom: 15px;
`
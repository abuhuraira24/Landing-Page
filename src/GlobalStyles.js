import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
}
  body{
    font-family: 'Poppins', sans-serif;
  }
  a{
    font-family: 'Poppins', sans-serif;
      text-decoration: none;
       
  }
  a:hover{
      color: #fff
  }
  button {
  border: none !important;
  background: transparent;
  box-shadow: none !important;
}
button:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
input:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.accordion-item {
  border: none;
    border-bottom: 1px solid #ddd !important;
}
.accordion-item:last-child{
  border-bottom: none !important;
}
`;

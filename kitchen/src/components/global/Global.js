import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  background: rgb(12, 11, 8);

}


.auto{
    background:red;
}

`;

export const GeneralWrapper = styled.div`
  overflow-x: hidden;
`;

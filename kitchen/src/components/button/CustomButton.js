import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  padding: 8px 32px;
  width: auto;
  height: 44px;
  background: #dcca87;
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.04em;
  border: 0;
  outline: 0;
  border-radius: 7px;
  color: #0c0c0c;
`;

const CustomButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomButton;

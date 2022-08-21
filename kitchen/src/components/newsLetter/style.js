import styled from "styled-components";

export const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsBox = styled.div`
  padding: 64px 140px;
  width: 80%;
  height: 442px;
  background: #0c0c0c;
  border: 1px solid rgba(220, 202, 135, 0.2);
  box-shadow: 22px 30px 95px 1px rgba(0, 0, 0, 0.7);
  text-align: center;

  @media (max-width: 900px) {
    padding: 24px 20px;
    height: auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 80%;
  border: 1px solid #f5efdb;
  background: transparent;
  margin-right: 10px;
  height: 45px;
  padding-left: 10px;

  &::placeholder {
    font-family: "Cormorant Upright";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 175%;
    text-align: left;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: #aaaaaa;
  }
`;

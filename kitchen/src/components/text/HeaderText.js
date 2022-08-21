import styled from "styled-components";

const Heading = styled.h2`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 130%;
  /* text-align: right; */
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: #dcca87;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const HeaderText = ({ children }) => {
  return <Heading>{children}</Heading>;
};

const HeroHeader = styled(Heading)`
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 130%;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #dcca87;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export { HeaderText, HeroHeader };

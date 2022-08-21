import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #aaaaaa;
  /* margin: 0; */
`;

const CustomText = ({ children }) => {
  return <Text>{children}</Text>;
};

const SecondaryText = styled(Text)`
  font-size: ${(props) => (props.big ? "45px" : "32px")};
  font-weight: ${(props) => (props.big ? "600" : "400")};
  color: ${(props) => (props.big ? "#FFFFFF;" : "#dcca87")};
  color: ${(props) => (props.large ? "#FFFFFF;" : "#dcca87")};
  font-family: "Cormorant Upright";
  margin: 0;
  line-height: ${(props) => (props.big ? "58px" : "28px")};
`;

const SmallTitleText = styled(SecondaryText)`
  color: ${(props) => (props.secondary ? "#dcca87" : "#ffffff")};
  font-weight: 700;
  font-size: 23px;
  letter-spacing: 0.04em;
`;

export { CustomText, SecondaryText, SmallTitleText };

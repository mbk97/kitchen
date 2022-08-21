import styled from "styled-components";

export const CustomWrapper = styled.div`
  height: auto;
  width: 100vw;
  background: url("chef-bg.svg");
  background-size: cover;
  background-position: center;
  color: #fff;
`;
export const ChefWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding: 40px 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const FlexContentOne = styled.div`
  @media (max-width: 1200px) {
    margin-top: 30px;
    margin-right: 20px;
  }
`;
export const FlexContentTwo = styled.div`
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
`;

export const BigImg = styled.img`
  height: 700px;
  max-width: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1200px) {
    height: 500px;
    max-width: 100%;
  }
`;

export const ChefText = styled.p`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  margin: 0;
`;

export const SpoonImg = styled.img``;

export const LongTextWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 20px 0 30px 0;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const QuoteImg = styled.img`
  padding-right: 8px;
`;

export const Signature = styled.img`
  margin-top: 20px;
`;

export const Position = styled.p`
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

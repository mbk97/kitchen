import styled from "styled-components";

export const HeroWrapper = styled.div`
  background: rgb(12, 11, 8);
  width: 100vw;
  height: auto;
`;

export const HeroItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 60px;
  padding: 20px 100px;
  @media (max-width: 600px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;

export const FlexContentOne = styled.div`
  margin-right: 10px;
`;

export const HeroTextWrapper = styled.div`
  width: 500px;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const FlexContentTwo = styled.div`
  margin-top: 30px;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px;
  cursor: pointer;
`;

export const ScrollImg = styled.img``;

export const HeroImage = styled.img`
  width: 500px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 600px) {
    /* height: 350px; */
    max-width: 100%;

    /* width: 350px; */
  }
`;

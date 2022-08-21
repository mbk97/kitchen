import styled from "styled-components";

export const SpecialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 100px;
  margin-top: 2rem;

  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  @media (min-width: 1400px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  margin: 40px 30px;
  width: 412px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentHeader = styled.div`
  text-align: center;
`;

export const ContentDetails = styled.div`
  margin: 20px 0;
`;
export const ContentNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentDescription = styled.div``;

export const Line = styled.img``;

export const SpecialImg = styled.img`
  height: 600px;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ImageContainer = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

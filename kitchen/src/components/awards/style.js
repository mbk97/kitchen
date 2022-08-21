import styled from "styled-components";

export const AwardHeaderImg = styled.img`
  margin: 20px 20px;
`;

export const AwardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  @media (max-width: 1200px) {
    padding: 40px 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const AwardContent = styled.div``;

export const ContentOne = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContentTwo = styled.div``;

export const AwardData = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 20px 0;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const AwardImg = styled.img`
  width: 100%;
  height: 691px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const AwardIndex = styled.img`
  margin-right: 20px;
`;

export const AwardName = styled.div``;

import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 100px;
  @media (max-width: 600px) {
    padding: 40px 20px;
    justify-content: center;
  }
`;

export const ContactText = styled.div`
  margin-top: 2rem;
  margin-bottom: 20px;
`;

export const ContactFlexOne = styled.div``;
export const ContactFlexTwo = styled.div`
  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const TimeContainer = styled.div`
  margin-bottom: 50px;
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* margin: 2rem 0; */
  padding: 40px 0;

  .data_one {
    margin-top: 1.5rem;
  }
`;

export const FooterData = styled.div`
  text-align: center;
`;

export const SocialWrapper = styled.div`
  /* width: 120px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.img`
  margin: 0 5px;
`;

export const CopyRight = styled.div`
  text-align: center;
  padding: 30px 0;
  /* margin: 20px 0; */
`;

export const CopyText = styled.p`
  font-size: 16px;
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #aaaaaa;
`;

import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 850px;
  /* justify-content: space-between; */
  padding: 20px 100px;
  @media (max-width: 1200px) {
    padding: 20px 20px;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
  }
`;

export const AboutContainer = styled.div`
  width: 500px;
  /* width: 700px; */

  .spoon {
    float: right;
  }
`;

export const AboutHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AboutTextWrapper = styled.div`
  text-align: right;
  margin: 20px 0;
  width: auto;

  /* width: 523px; */

  @media (max-width: 1200px) {
    width: 100%;
    height: 350px;
  }
`;
export const HistoryTextWrapper = styled.div`
  text-align: left;
  margin: 20px 0;
  width: auto;
`;

export const KnifeWrapper = styled.div`
  background: url("knife-bg.svg");
  background-size: cover;
  background-position: center;
  height: 450px;
  width: 620px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1200px) {
    /* width: 100%; */
    height: 650px;
    margin: 30px 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;

export const KnifeImage = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const HistoryContainer = styled.div`
  width: 500px;

  @media (max-width: 900px) {
    width: 100%;
    height: 300px;
    margin-top: 10rem;
  }
`;

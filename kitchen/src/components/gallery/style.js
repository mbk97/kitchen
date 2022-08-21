import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 20px;
  overflow-x: hidden;
  /* margin-top: 2rem; */

  @media (max-width: 1200px) {
    padding: 40px 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const GalleryTextWrapper = styled.div`
  width: 491px;
  @media (max-width: 1200px) {
    width: auto;
  }
`;

export const LeftContent = styled.div``;

export const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    /* justify-content: center; */
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`;

export const GalleryImg = styled.img`
  height: 447px;
  width: 200px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 900px) {
    width: 100%;
    margin: 10px 0;
  }
`;

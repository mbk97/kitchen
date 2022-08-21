import styled from "styled-components";

export const VideoWrapper = styled.div`
  height: 600px;
  width: 100vw;
  background: url("video.svg");
  /* background: red; */
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
`;

export const PlayBtn = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

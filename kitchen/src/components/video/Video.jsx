import { VideoWrapper, PlayBtn } from "./style";
import { play } from "../../assets/svg";

const Video = () => {
  return (
    <VideoWrapper>
      <PlayBtn src={play} />
    </VideoWrapper>
  );
};

export default Video;

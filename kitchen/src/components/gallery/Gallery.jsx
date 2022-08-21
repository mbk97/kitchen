import { CustomWrapper, SpoonImg } from "../chef/style";
import { CustomText, SmallTitleText } from "../text/CustomText";
import { imgData } from "./data";
import {
  GalleryImg,
  GalleryWrapper,
  ImageWrapper,
  LeftContent,
  GalleryTextWrapper,
} from "./style";
import { spoon } from "../../assets/svg";
import CustomButton from "../button/CustomButton";
import { HeaderText } from "../text/HeaderText";

const Gallery = () => {
  return (
    <CustomWrapper>
      <GalleryWrapper>
        <LeftContent>
          <SmallTitleText>Instagram</SmallTitleText>
          <SpoonImg src={spoon} />
          <HeaderText>Photo Gallery</HeaderText>
          <GalleryTextWrapper>
            <CustomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </CustomText>
          </GalleryTextWrapper>
          <CustomButton>View More</CustomButton>
        </LeftContent>
        <ImageWrapper>
          {imgData.map((item) => {
            return <GalleryImg src={item.img} key={item.id} />;
          })}
        </ImageWrapper>
      </GalleryWrapper>
    </CustomWrapper>
  );
};

export default Gallery;

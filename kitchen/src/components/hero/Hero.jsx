import {
  HeroWrapper,
  HeroItemContainer,
  FlexContentOne,
  FlexContentTwo,
  ScrollWrapper,
  ScrollImg,
  HeroImage,
  HeroTextWrapper,
} from "./style";
import { SmallTitleText, CustomText } from "../text/CustomText";
import { spoon, scroll } from "../../assets/svg";
import { SpoonImg } from "../chef/style";
import { HeroHeader } from "../text/HeaderText";
import CustomButton from "../button/CustomButton";
import HeroImg from "../../assets/images/Hero.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroItemContainer>
        <FlexContentOne>
          <SmallTitleText>Chase the new Flavour</SmallTitleText>
          <SpoonImg src={spoon} />
          <HeroTextWrapper>
            <HeroHeader>The key to Fine dining</HeroHeader>
            <CustomText>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </CustomText>
          </HeroTextWrapper>
          <CustomButton>Explore Menu</CustomButton>
        </FlexContentOne>
        <FlexContentTwo>
          <HeroImage src={HeroImg} />
        </FlexContentTwo>
      </HeroItemContainer>
      <ScrollWrapper>
        <ScrollImg src={scroll} />
      </ScrollWrapper>
    </HeroWrapper>
  );
};

export default Hero;

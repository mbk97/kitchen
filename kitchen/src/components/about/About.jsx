import {
  AboutWrapper,
  AboutContainer,
  HistoryContainer,
  KnifeWrapper,
  KnifeImage,
  AboutHeaderWrapper,
  AboutTextWrapper,
  HistoryTextWrapper,
} from "./style";
import { CustomWrapper, SpoonImg } from "../chef/style";
// import knife from "../../assets/images/knife.png";
import { HeaderText } from "../text/HeaderText";
import { CustomText, SecondaryText } from "../text/CustomText";
import CustomButton from "../button/CustomButton";
import { spoon, knife } from "../../assets/svg";

const About = () => {
  return (
    <CustomWrapper>
      <AboutWrapper>
        <AboutContainer>
          <AboutHeaderWrapper>
            <HeaderText>About Us</HeaderText>
          </AboutHeaderWrapper>
          <SpoonImg className="spoon" src={spoon} />
          <AboutTextWrapper>
            <CustomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </CustomText>
            <CustomButton>Know More</CustomButton>
          </AboutTextWrapper>
        </AboutContainer>
        <KnifeWrapper>
          <KnifeImage src={knife} />
        </KnifeWrapper>
        <HistoryContainer>
          <HeaderText>Our History</HeaderText>
          <SpoonImg src={spoon} />
          <HistoryTextWrapper>
            <CustomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </CustomText>
            <CustomButton>Know More</CustomButton>
          </HistoryTextWrapper>
        </HistoryContainer>
      </AboutWrapper>
    </CustomWrapper>
  );
};

export default About;

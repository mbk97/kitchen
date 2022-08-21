import { CustomWrapper, SpoonImg } from "../chef/style";
import { HeaderText } from "../text/HeaderText";
import { CustomText, SecondaryText } from "../text/CustomText";
import {
  FooterWrapper,
  FooterData,
  SocialWrapper,
  SocialIcon,
  CopyRight,
  CopyText,
} from "./style";
import { spoon, ig, fb, twt } from "../../assets/svg";

const Footer = () => {
  return (
    <CustomWrapper>
      <FooterWrapper>
        <FooterData className="data_one">
          <SecondaryText large>Contact Us</SecondaryText>
          <CustomText>9 W 53rd St, New York, NY 10019, USA</CustomText>
          <CustomText>
            +1 212-344-1230
            <br /> +1 212-555-1230
          </CustomText>
        </FooterData>
        <FooterData>
          <HeaderText>GERICHT</HeaderText>
          <CustomText>
            "The best way to find yourself is to lose yourself <br /> in the
            service of others.”
          </CustomText>
          <SpoonImg src={spoon} />
          <SocialWrapper>
            <SocialIcon src={fb} />
            <SocialIcon src={twt} />
            <SocialIcon src={ig} />
          </SocialWrapper>
        </FooterData>
        <FooterData className="data_one">
          <SecondaryText large>Working Hours</SecondaryText>
          <CustomText>
            Monday-Friday: <br /> 08:00 am -12:00 am
          </CustomText>
          <CustomText>
            Saturday-Sunday:
            <br /> 07:00am -11:00 pm
          </CustomText>
        </FooterData>
      </FooterWrapper>
      <CopyRight>
        <CopyText>2021 Gerícht. All Rights reserved.</CopyText>
      </CopyRight>
    </CustomWrapper>
  );
};

export default Footer;

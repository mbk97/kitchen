import { CustomWrapper, SpoonImg, BigImg } from "../chef/style";
import CustomButton from "../button/CustomButton";
import {
  ContactWrapper,
  ContactFlexOne,
  ContactFlexTwo,
  TimeContainer,
  ContactText,
} from "./style";
import { SmallTitleText } from "../text/CustomText";
import { spoon } from "../../assets/svg";
import { HeaderText } from "../text/HeaderText";
import { CustomText } from "../text/CustomText";
import contact from "../../assets/images/contact.png";

const Contact = () => {
  return (
    <CustomWrapper id="contact">
      <ContactWrapper>
        <ContactFlexOne>
          <SmallTitleText>Contact</SmallTitleText>
          <SpoonImg src={spoon} />
          <HeaderText>Find Us</HeaderText>
          <ContactText>
            <CustomText>
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </CustomText>
          </ContactText>
          <TimeContainer>
            <SmallTitleText secondary>Opening Hours</SmallTitleText>
            <CustomText>Mon - Fri: 10:00 am - 02:00 am</CustomText>
            <CustomText>Sat - Sun: 10:00 am - 03:00 am</CustomText>
          </TimeContainer>
          <CustomButton>Visit Us</CustomButton>
        </ContactFlexOne>
        <ContactFlexTwo>
          <BigImg src={contact} />
        </ContactFlexTwo>
      </ContactWrapper>
    </CustomWrapper>
  );
};

export default Contact;

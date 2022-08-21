import React from "react";
import { spoon, quote, sign } from "../../assets/svg";
import { CustomText, SecondaryText } from "../text/CustomText";
import { HeaderText } from "../text/HeaderText";
import {
  ChefWrapper,
  FlexContentOne,
  FlexContentTwo,
  BigImg,
  ChefText,
  SpoonImg,
  LongTextWrapper,
  QuoteImg,
  Signature,
  Position,
  CustomWrapper,
  // Custom
} from "./style";
import chefImage from "../../assets/images/chef.png";

const Chef = () => {
  return (
    <CustomWrapper id="chef">
      <ChefWrapper>
        <FlexContentOne>
          <BigImg src={chefImage} />
        </FlexContentOne>
        <FlexContentTwo>
          <ChefText>Chef's Word</ChefText>
          <SpoonImg src={spoon} />
          <HeaderText>What we believe in</HeaderText>
          <LongTextWrapper>
            <CustomText>
              <QuoteImg src={quote} alt="quote" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              culpa ea natus totam, vitae est dolorem maxime aut exercitationem
              culpa ea natus totam, vitae est dolorem maxime aut exercitationem
              quaerat.
            </CustomText>
          </LongTextWrapper>

          <SecondaryText>Kevin Luo</SecondaryText>
          <Position>Chef & Founder</Position>
          <Signature src={sign} />
        </FlexContentTwo>
      </ChefWrapper>
    </CustomWrapper>
  );
};

export default Chef;

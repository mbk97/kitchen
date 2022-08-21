import React from "react";
import { NewsBox, NewsWrapper, InputContainer, Input } from "./style";
import { spoon } from "../../assets/svg";
import { SmallTitleText, CustomText } from "../text/CustomText";
import { SpoonImg } from "../chef/style";
import { HeaderText } from "../text/HeaderText";
import CustomButton from "../button/CustomButton";

const NewsLetter = () => {
  return (
    <NewsWrapper>
      <NewsBox>
        <SmallTitleText>Newsletter</SmallTitleText>
        <SpoonImg src={spoon} />
        <HeaderText>Subscribe to Our Newsletter</HeaderText>
        <CustomText>And never miss latest Updates!</CustomText>

        <InputContainer>
          <Input type="email" placeholder="Enter Email" />
          <CustomButton>Subscribe</CustomButton>
        </InputContainer>
      </NewsBox>
    </NewsWrapper>
  );
};

export default NewsLetter;

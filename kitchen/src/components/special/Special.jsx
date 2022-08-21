import React from "react";
import { SpoonImg } from "../chef/style";
import {
  SpecialWrapper,
  Header,
  ContentWrapper,
  Content,
  ImageContainer,
  Line,
  ContentDescription,
  ContentHeader,
  ContentDetails,
  ContentNameAndPrice,
  SpecialImg,
  ButtonWrapper,
} from "./style";
import { SecondaryText, SmallTitleText } from "../text/CustomText";
import { spoon, line } from "../../assets/svg";
import { HeaderText } from "../text/HeaderText";
import special from "../../assets/images/special.png";
import { cocktailData, wineData } from "./data";
import CustomButton from "../button/CustomButton";

const Special = () => {
  return (
    <>
      <SpecialWrapper>
        <Header>
          <SmallTitleText>Menu that fits you palatte</SmallTitleText>
          <SpoonImg src={spoon} />
          <HeaderText>Today’s Special</HeaderText>
        </Header>
        <ContentWrapper>
          <Content>
            <ContentHeader>
              <SecondaryText big>Wine & Beer</SecondaryText>
            </ContentHeader>
            {wineData.map((item) => {
              const { name, id, price, description } = item;
              return (
                <ContentDetails key={id}>
                  <ContentNameAndPrice>
                    <SmallTitleText secondary>{name}</SmallTitleText>
                    <Line src={line} />
                    <SmallTitleText>{price}</SmallTitleText>
                  </ContentNameAndPrice>
                  <ContentDescription>
                    <SmallTitleText>{description}</SmallTitleText>
                  </ContentDescription>
                </ContentDetails>
              );
            })}
          </Content>
          <ImageContainer>
            <SpecialImg src={special} />
          </ImageContainer>
          <Content>
            <ContentHeader>
              <SecondaryText big>Cocktails</SecondaryText>
            </ContentHeader>
            {cocktailData.map((item) => {
              const { name, id, price, description } = item;
              return (
                <ContentDetails key={id}>
                  <ContentNameAndPrice>
                    <SmallTitleText secondary>{name}</SmallTitleText>
                    <Line src={line} />
                    <SmallTitleText>{price}</SmallTitleText>
                  </ContentNameAndPrice>
                  <ContentDescription>
                    <SmallTitleText>{description}</SmallTitleText>
                  </ContentDescription>
                </ContentDetails>
              );
            })}
          </Content>
        </ContentWrapper>
        <ButtonWrapper>
          <CustomButton>View More</CustomButton>
        </ButtonWrapper>
      </SpecialWrapper>
      ;
    </>
  );
};

export default Special;

import {
  AwardWrapper,
  AwardContent,
  ContentOne,
  ContentTwo,
  AwardHeaderImg,
  AwardData,
  AwardIndex,
  AwardName,
  AwardImg,
} from "./style";
import { CustomWrapper, SpoonImg } from "../chef/style";
import { awardOne } from "../../assets/svg";
import { SmallTitleText } from "../text/CustomText";
import { spoon } from "../../assets/svg";
import { HeaderText } from "../text/HeaderText";
import { awardData } from "./data";
import { CustomText } from "../text/CustomText";
import awardTwo from "../../assets/images/awardTwo.png";

const Awards = () => {
  return (
    <CustomWrapper id="awards">
      <AwardHeaderImg src={awardOne} />
      <AwardWrapper>
        <AwardContent>
          <SmallTitleText>Awards & recognition</SmallTitleText>
          <SpoonImg src={spoon} />
          <HeaderText>Our Laurels</HeaderText>
          <ContentOne>
            {awardData.map((item) => {
              const { header, text, id, img } = item;
              return (
                <AwardData key={id}>
                  <AwardIndex src={img} />
                  <AwardName>
                    <SmallTitleText secondary>{header}</SmallTitleText>
                    <CustomText awardText>{text}</CustomText>
                  </AwardName>
                </AwardData>
              );
            })}
          </ContentOne>
        </AwardContent>
        <ContentTwo>
          <AwardImg src={awardTwo} alt="" />
        </ContentTwo>
      </AwardWrapper>
    </CustomWrapper>
  );
};

export default Awards;

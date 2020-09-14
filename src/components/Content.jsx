import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";



const AboutContentWrapper = styled.div`
  ${tw` flex justify-center flex-col mx-auto -mt-64 px-4 max-w-screen-sm mb-24`}
`;

const Spacer = styled.div`
  ${tw` -mt-24`}
`;

const SubTitle = styled.h3`
${tw`mb-2`}
`;

const Text = styled.p`
${tw`text-gray-600 mb-4`}
`;

function Content(props) {
  return (
    <AboutContentWrapper>
      <Spacer />

      <SubTitle>{props.subTitle1}</SubTitle>
      <Text>{props.text1}</Text>
      <SubTitle>{props.subTitle2}</SubTitle>
      <Text>{props.text2}</Text>
      <SubTitle>{props.subTitle3}</SubTitle>
      <Text>{props.text3}</Text>
      <SubTitle>{props.subTitle4}</SubTitle>
      <Text>{props.text4}</Text>
    </AboutContentWrapper>
  );
}

export default Content;

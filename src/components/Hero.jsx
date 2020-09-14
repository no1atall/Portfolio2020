import React from "react";
import tw from "tailwind.macro";

const Wrapper = tw.div`
flex justify-center items-center flex-col h-screen 
`;

const Spacer = tw.span`m-20`;
const Title = tw.h1`text-3xl md:text-6xl -mt-64 mb-24`;

const SubTitle = tw.h3`text-2xl md:text-4xl mb-24`;

const Text = tw.h3`text-xl md:text-2xl`;

const Hero = (props) => {
  return (
    <Wrapper>
      <Spacer />
      {props.title && <Title>{props.title}</Title>}
      {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      {props.text && <Text>{props.text}</Text>}
    </Wrapper>
  );
};

export default Hero;

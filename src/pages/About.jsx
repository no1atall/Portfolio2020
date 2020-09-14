import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Hero from "../components/Hero";
import Content from "../components/Content";

const AboutWrapper = styled.div`
  ${tw`-mt-24`}
`;

const About = (props) => {
  return (
    <AboutWrapper>
      <Hero title={props.title} />
      <Content
        subTitle1={props.subTitle1}
        subTitle2={props.subTitle2}
        subTitle3={props.subTitle3}
        subTitle4={props.subTitle4}
        text1={props.text1}
        text2={props.text2}
        text3={props.text3}
        text4={props.text4}
      />
    </AboutWrapper>
  );
};

export default About;

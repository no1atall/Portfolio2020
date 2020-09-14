import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";

const Container = tw.div`
w-full bg-blue-700 flex justify-between py-6 flex-col items-center
`;

const Logo = tw.div`
text-white text-3xl pb-5 flex flex-col items-center
`;

const LogoDiv = tw.div`mt-5 flex flex-col items-center`;

const LogoText = tw.span`text-lg mb-2`;

const Menu = tw.ul`flex flex-col items-center md:flex-row`;

const StyledLink = styled(Link)`
  ${tw` text-white px-5 py-3 md:px-20 md:px-2 md:py-5 text-xl md:text-2xl font-semibold no-underline`}
`;

const Footer = () => {
  return (
    <Container>
      <Logo>
        Ian's Portfolio
        <br />
        <LogoDiv>
          <LogoText> This site was made by</LogoText>
          <LogoText>Ian Vicherek</LogoText>
        </LogoDiv>
      </Logo>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/contact">Contact Me</StyledLink>
      </Menu>
    </Container>
  );
};

export default Footer;

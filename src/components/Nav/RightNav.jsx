import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";


const List = styled.ul`
  ${tw`list-none flex flex-col flex-no-wrap md:flex-row bg-blue-700 md:bg-white fixed md:relative h-screen md:h-16 pt-16 md:pt-0`};
  li {
    ${tw`px-2 py-5 text-large hover:bg-blue-500`}
  }
  @media (max-width: 767px) {
    ${tw`w-full`};

    transform: ${({ navOpen }) => (navOpen ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;

    li {
      ${tw`text-white px-20`}
    }
  }
`;

const StyledLink = styled(Link)`
  ${tw`text-white px-20 md:px-2 py-5 text-large no-underline md:text-gray-900 hover:bg-blue-500 hover:md:bg-white hover:md:text-gray-600`}
`;


const RightNav = ({navOpen, toggleOpen}) => {
    return ( 
        <List navOpen={navOpen}>
        <StyledLink onClick={toggleOpen} to="/">Home</StyledLink>
        <StyledLink onClick={toggleOpen} to="/about">About Me</StyledLink>
        <StyledLink onClick={toggleOpen} to="/contact">Contact Me</StyledLink>
      </List>

    )
}
 
export default RightNav;
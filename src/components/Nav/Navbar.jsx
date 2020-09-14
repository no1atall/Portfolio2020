import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Burger from "./Burger";

const Nav = styled.nav`
  ${tw`w-full h-24 border-0 border-b-2 border-gray-400 border-solid py-0 px-5 flex justify-between items-end text-2xl font-semibold`}
  .logo {
    ${tw`py-3 px-0`}
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Ian's Porfolio</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

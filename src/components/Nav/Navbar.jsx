import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Burger from "./Burger";
import RightNav from "./RightNav"

const Nav = styled.nav`
  ${tw`w-full h-24 border-0 border-b-2 border-gray-400 border-solid py-0 px-5 flex justify-between items-end text-2xl font-semibold`}
  .logo {
    ${tw`py-3 px-0`}
  }
`;

const Navbar = () => {
  const [navOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Nav>
      <div className="logo">Ian's Porfolio</div>
      <Burger navOpen={navOpen} toggleOpen={toggleOpen} />
      <RightNav navOpen={navOpen} toggleOpen={toggleOpen} />
    </Nav>
  );
};

export default Navbar;
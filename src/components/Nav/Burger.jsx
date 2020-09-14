import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  ${tw`w-8 h-8 fixed z-20 flex flex-col justify-around flex-no-wrap md:hidden`}
  top: 15px;
  right: 20px;
`;

const StyledDiv = styled.div`
  ${tw`w-8 h-1`}
  background-color: ${({ open }) => (open ? "#ccc" : "#333")};
  border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <StyledDiv />
        <StyledDiv />
        <StyledDiv />
      </StyledBurger>
      <RightNav open={open} />
    </React.Fragment>
  );
};

export default Burger;

import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";


const BurgerMenu = styled.div`
  ${tw`w-16 h-16 fixed z-20 flex flex-col justify-around flex-no-wrap md:hidden text-4xl `}
  top: 15px;
  right: 20px;
  color: ${({navOpen}) => (navOpen ? "white" :  "black")}

  
`;


const Burger = ({navOpen, toggleOpen}) => {
  return (
    <BurgerMenu onClick={toggleOpen}>
      <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
    </BurgerMenu>
  );
};

export default Burger;

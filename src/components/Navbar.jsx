import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const NavWrapper = tw.nav`flex items-center justify-between flex-wrap bg-blue-500 p-6`;
const NavLogo = tw.div`flex items-center flex-shrink-0 text-white mr-6`;
const NavHome = tw.span`font-semibold text-xl tracking-tight`;
const NavHambugerWrapper = tw.div`block lg:hidden`;
const NavHamburger = tw.button`flex items-center px-3 py-2 border rounded bg-blue-500 text-gray-900 border-gray-700 hover:text-white hover:border-white`;
const HamburgerIcon = tw.svg`fill-current h-3 w-3`;
const NavLinkWrapper = tw.div`w-full block flex-grow lg:flex lg:items-center lg:w-auto`;
const NavLinks = tw.div`text-sm lg:flex-grow`;
const NavLink = tw.a`block mt-4 no-underline font-medium lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4`;
const ResumeDownloadButton = tw.button`inline-block text-sm font-medium px-4 py-2 leading-none border rounded bg-blue-500 text-white border-gray-700 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0`;
const ResumeDownload = tw.div``;

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <NavWrapper>
      <NavLogo>
        <NavHome>Ian's Portfolio</NavHome>
      </NavLogo>
      <NavHambugerWrapper>
        <NavHamburger onClick={() => setNavbarOpen(!navbarOpen)}>
          <HamburgerIcon viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </HamburgerIcon>
        </NavHamburger>
      </NavHambugerWrapper>
      <NavLinkWrapper className={navbarOpen ? "flex" : " hidden"}>
        <NavLinks>
          <NavLink href="#responsive-header">Home</NavLink>
          <NavLink href="#responsive-header">About Me</NavLink>
          <NavLink href="#responsive-header">Contact</NavLink>
        </NavLinks>
        <ResumeDownloadButton>
          <ResumeDownload href="#">Download Resume</ResumeDownload>
        </ResumeDownloadButton>
      </NavLinkWrapper>
    </NavWrapper>
  );
}

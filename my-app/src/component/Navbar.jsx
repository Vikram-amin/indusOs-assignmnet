import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Navbar = () => {
  return (
    <NavbarWrapper>
      <Links to="/">Home</Links>
      <Links to="/">Text</Links>
    </NavbarWrapper>
  );
};

export default Navbar;



const NavbarWrapper = styled.nav`
  display: flex;
  background-color: black;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
 
`;

const Links = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: white;
  &:focus {
    color: red;
  }
`;
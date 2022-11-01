import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Logo from "../../app/assets/svg/Logo";
import ToggleSwitch from "../buttons/ToggleSwitch";

const Navbar = (props) => {
  const { themeToggler } = props;
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavWrapper show={show}>
      <Navigation>
        <LeftContainer>
          <Logo width={5} height={5} />
          <SearchBar />
        </LeftContainer>
        <ToggleSwitch action={themeToggler} />
      </Navigation>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  height: 8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.lightBackground};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 2rem;
  z-index: 9999;
  ${(props) =>
    props.show &&
    css`
      top: 0px;
      transition: 0.3s linear;
    `}
  ${(props) =>
    !props.show &&
    css`
      top: -12rem;
      transition: 0.3s linear;
    `}
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 180rem;
  width: 100%;
  margin: 0 auto;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  margin-left: 5rem;
  min-width: 40rem;
  height: 5rem;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  outline: none;
  border: 0;
  outline: 0;
`;

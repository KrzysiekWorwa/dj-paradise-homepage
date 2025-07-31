import styled from "styled-components";
import { Link } from "react-scroll";


export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: rgb(0 0 0 / 30%);
  backdrop-filter: blur(10px); 
  z-index: 1000;
  display: flex;
  text-align: center;

        @media (max-width: 785px) {
        height: 60px;
        background-color: white;
        backdrop-filter: none;
  }
`;

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const NavLogo = styled.img`
    height: auto;
    width: 70px;
    cursor: pointer;
    margin-top: 4px;

    @media (max-width: 785px) {
         height: 50px;
         width: 50px;
         margin-top: 4px;
    }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;
  align-items: center;

   @media (max-width: 785px) {
        display: none;
  }
`;

export const NavItem = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: color 0.2s ease;
  text-align: center;

     @media (max-width: 785px) {
        color: black;
  }

  &:hover {
    color: hsla(37, 87%, 50%, 1.00);
  }
`;

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    div {
        width: 25px;
        height: 3px;
        background: black;
        border-radius: 2px;
    }


      @media (max-width: 785px) {
        display: flex;
  }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 785px) {
        display: ${({ $open }) => ($open ? "flex" : "none")};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items:center;
        background-color: white;
        padding: 20px 0;
        gap: 15px;
        z-index: 999;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;

export const NavIcons = styled.div`
    display: flex;
    gap: 20px;

          @media (max-width: 785px) {
        display: none;
  }
`;

export const ContactButton = styled(Link)`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: #C47E0E;
  border: 1px solid;
  border-color: #C47E0E;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  align-self: flex-start;
  font-size: 25px;

      &:hover {
        background: hsla(37, 87%, 50%, 1.00);
        border-color: hsla(37, 87%, 50%, 1.00);
    }
`;


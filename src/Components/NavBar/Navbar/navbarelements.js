import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";
import { RiMenuFoldLine } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
const heightOfMenu = "500px";

export const NavItem = styled.ul`
  color: #fff;
  &:hover {
    color: white;
  }
`;
export const Navlinkout = styled.li`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-family: "Mukta", sans-serif;
  font-size: 20px;

  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    color: white;
  }
`;
export const NavLink = styled(Links)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-family: "Mukta", sans-serif;
  font-size: 20px;

  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    color: white;
  }

  @media screen and (max-width: 1054px) {
    display: none;
  }
`;
export const Navbar = styled.nav`
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

  z-index: 100;
  @media screen and (max-width: 1054px) {
    width: 100%;
  }
  &.active {
    background: #000;
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  margin-top: 20px;
  margin-right: 30px;
`;
export const NavbarBrand = styled.div`
  font-family: "Gemunu Libre", sans-serif;
  color: white;
  margin-left: 10px;
  font-size: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  justify-content: space-between;
  float: left;
  @media (max-width: 1080px) {
    font-size: 30px;
    flex-direction: row;
  }
`;
export const Collapse = styled.div``;
export const NavbarToggler = styled(Link)``;
export const MainFooter = styled.div`
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: white;
  text-align: center;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: none;

  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
  @media screen and (max-width: 1054px) {
    display: inline;
  }
`;
export const Burger = styled.button``;
export const BurgerIcon = styled.div`
  transform: translateY(${(p) => (p.isOpen ? <CgMenuLeft /> : <CgMenuLeft />)});
  transition: transform 0.45s;

  @media screen and (max-width: 2024px) {
    display: inline;
    margin: 100px;
  }
`;
export const Content = styled.div`
  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
`;

export const Menu = styled.div`
  height: ${heightOfMenu};

  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #0000ffff;
`;
export const MenuButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 150px;
  height: 34px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 50px;
  border: 0;
  color: #000;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  &::hover {
    color: #8f44fd;
  }
`;
export const Container = styled.div``;
export const BurgerMenu = styled.div``;
export const Mobilebtn = styled.div`
  display: none;
  @media screen and (max-width: 1054px) {
    display: flex;
    justify-content: space-between;
    float: right;
  }
`;

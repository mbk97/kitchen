import styled from "styled-components";

export const NavWrapper = styled.div`
  padding: 20px 100px;
  color: #ffffff;

  @media (max-width: 1200px) {
    padding: 0px 20px;
    justify-content: center;
  }

  .open {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: none;
  }
  .open.hide {
    display: none;
  }
  .small_screen_logo {
    display: none;
  }
  @media (max-width: 1200px) {
    .open {
      display: block;
    }

    .small_screen_logo {
      display: block;
      margin-top: 10px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .close {
    display: none;
  }

  @media (max-width: 1200px) {
    position: absolute;
    top: 0;
    left: -8999px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    /* display: none; */
    transition: all ease-in-out 0.3s;
    background: rgba(0, 0, 0, 0.8);
    &.nav_active {
      opacity: 1;
      left: 0;
      /* display: block; */
    }

    .close {
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
      color: white;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div``;

export const LogoImg = styled.img``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  .icon {
    padding-left: 10px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
    margin: 10px 0;
  }
`;

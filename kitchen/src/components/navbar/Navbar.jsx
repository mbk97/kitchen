import { useState, useEffect } from "react";
import { logo } from "../../assets/svg";
import { NavWrapper, Nav, Logo, LogoImg, NavList, NavItem } from "./style";
import { data } from "./data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = click ? "hidden" : "auto";
  }, [click]);

  return (
    <NavWrapper>
      <Logo className="small_screen_logo">
        <LogoImg src={logo} />
      </Logo>
      <Nav className={click ? "nav_active" : ""}>
        <Logo>
          <LogoImg src={logo} />
        </Logo>
        <NavList>
          {data.map((item) => {
            const { id, text, Img } = item;
            return (
              <>
                <NavItem key={id} onClick={handleClick}>
                  {text}
                  <Img className="icon" size={40} />
                </NavItem>
              </>
            );
          })}
        </NavList>
        <AiOutlineClose className="close" size={40} onClick={handleClick} />
      </Nav>
      <AiOutlineMenu
        className={click ? "open hide" : "open"}
        onClick={handleClick}
        size={40}
      />
    </NavWrapper>
  );
};

export default Navbar;

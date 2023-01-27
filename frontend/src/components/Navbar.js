import React from "react";
import { NavWrapper, Logo} from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png';
import { HamburgerMenu } from "./HamburgerMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <NavWrapper>
          <Link to="/">
            <Logo role="button" tabindex="0" src={LogoImg} alt="langish logo, leads to homepage if clicked" />
          </Link>
          <HamburgerMenu tabindex="0" />
        </NavWrapper>
    )
}

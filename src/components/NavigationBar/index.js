import { useState } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper, NavIcons, ContactButton } from "./styled";
import Logo from "./images/logo.png"
import { Link } from "react-scroll";

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar $open={isOpen}>
            <NavWrapper>
                <Link to="home" smooth={true} duration={600} offset={-90}>
                    <NavLogo src={Logo} alt="Logo" />
                </Link>

                <Burger onClick={() => setIsOpen(!isOpen)}>
                    <div />
                    <div />
                    <div />

                </Burger>

                <NavLinks>
                    <NavItem to="home" smooth={true} duration={600} offset={-90}>
                        Home
                    </NavItem>
                    <NavItem to="about" smooth={true} duration={600} offset={-90}>
                        O mnie
                    </NavItem>
                    <NavItem to="offer" smooth={true} duration={800} offset={-200}>
                        Oferta
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-150}>
                        Kontakt
                    </NavItem>
                    <NavItem to="gallery" smooth={true} duration={1400} offset={-90}>
                        Portfolio
                    </NavItem>
                </NavLinks>
                <NavIcons>
                    <ContactButton to="address" smooth={true} duration={1400} offset={-150}>
                        Kontakt
                    </ContactButton>
                </NavIcons>

                <MobileMenu $open={isOpen}>
                    <NavItem to="home" smooth={true} duration={600} offset={-50}>
                        Home
                    </NavItem>
                    <NavItem to="about" smooth={true} duration={600} offset={-300}>
                        O mnie
                    </NavItem>
                    <NavItem to="offer" smooth={true} duration={800} offset={-300}>
                        Oferta
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1000} offset={-300}>
                        Kontakt
                    </NavItem>
                    <NavItem to="gallery" smooth={true} duration={1000} offset={-300}>
                        Portfolio
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;
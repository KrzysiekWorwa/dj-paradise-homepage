import { useState } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper, NavIcons, ContactButton } from "./styled";
import Logo from "./images/financial.png"
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
                        O nas
                    </NavItem>
                    <NavItem to="cooperation" smooth={true} duration={800} offset={-150}>
                        Współpraca
                    </NavItem>
                    <NavItem to="team" smooth={true} duration={1000} offset={-100}>
                        Zespół
                    </NavItem>
                    <NavItem to="why" smooth={true} duration={1200} offset={-100}>
                        Dlaczego my
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-150}>
                        Kontakt
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
                        O nas
                    </NavItem>
                    <NavItem to="cooperation" smooth={true} duration={800} offset={-300}>
                        Współpraca
                    </NavItem>
                    <NavItem to="team" smooth={true} duration={1000} offset={-300}>
                        Zespół
                    </NavItem>
                    <NavItem to="why" smooth={true} duration={1000} offset={-300}>
                        Dlaczego my
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1000} offset={-300}>
                        Kontakt
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;
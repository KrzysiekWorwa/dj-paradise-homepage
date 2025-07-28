import { FacebookIcon, FooterCopyright, FooterIcons, FooterLogo, FooterSection, FooterWrapper, HomeButton, InstagramIcon } from "./styled";
import Logo from "./images/logo.png"
import { ReactComponent as ArrowIcon } from "./SvgIcons/arrow.svg";
import { Link } from "react-scroll";

const Footer = () => (
    <>

        <FooterSection>
            <HomeButton to="home" smooth={true} duration={2000} offset={-90}>
                <ArrowIcon />
            </HomeButton>
            <FooterWrapper>
                <Link to="home" smooth={true} duration={600} offset={-90}>
                    <FooterLogo src={Logo} alt="Logo" />
                </Link>
                <FooterIcons>
                    <a href="https://www.facebook.com/djparadise.nt" target="_blank" title="Facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/djparadise90" target="_blank" title="Instagram" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </FooterIcons>
                <FooterCopyright>
                    Dj Paradise<br />
                    © Copyright 2025
                </FooterCopyright>
            </FooterWrapper>
        </FooterSection>
    </>
);


export default Footer;
import { ButtonWrapper, HeroButton, HeroContent, HeroHeader, HeroImage, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";
import heroImage from "./images/hero-stock.webp";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";
import { Link } from "react-scroll";

const Hero = () => (
    <HeroSection id="home">
        <StaggeredContainer>
            <HeroWrapper>
                <HeroContent>
                    <StaggeredItem>
                        <HeroHeader>
                            Pozyskaj Finansowanie razem z naszą pomocą
                        </HeroHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <HeroSubHeader>
                            Twój pokład potrzebuje środków na rozwój lub założenie działalności? Jesteś w idealnym miejscu!
                        </HeroSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <HeroButton as={Link} to="about" smooth={true} duration={600} offset={-150}>
                                Dowiedz się więcej
                            </HeroButton>
                        </ButtonWrapper>
                    </StaggeredItem>
                </HeroContent>
                <StaggeredItem>
                    <HeroImage src={heroImage} alt="zdjęcie przedstawiające właściciela" />
                </StaggeredItem>
            </HeroWrapper>
        </StaggeredContainer>
    </HeroSection>
);

export default Hero;
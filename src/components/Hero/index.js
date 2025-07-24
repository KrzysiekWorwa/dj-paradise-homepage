import { HeroHeader, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";

import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";

const Hero = () => (
    <HeroSection id="home">
        <HeroWrapper>
            <StaggeredContainer>
                <StaggeredItem>
                    <HeroHeader>
                        Dj Paradise
                    </HeroHeader>
                </StaggeredItem>
                <StaggeredItem>
                    <HeroSubHeader>
                        Wesele inne niż wszystkie!
                    </HeroSubHeader>
                </StaggeredItem>
            </StaggeredContainer>
        </HeroWrapper>

    </HeroSection>
);

export default Hero;
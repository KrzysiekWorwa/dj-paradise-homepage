import { HeroImage, HeroSection } from "./styled";
import image from "./images/hero.webp"

const Hero = () => (
    <HeroSection id="home">
            <HeroImage src={image} alt="Hero image" />
    </HeroSection>
);

export default Hero;
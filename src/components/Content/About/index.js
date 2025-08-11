import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Button, ButtonWrapper, ContentHeader, Section } from "../styled";
import { AboutDescription, AboutContent, AboutImage, AboutWrapper, ImageWrapper } from "./styled";
import image from "./images/me.webp"
import { Link } from "react-scroll";


const About = () => (

    <Section id="about">
        <StaggeredContainer>
            <AboutWrapper>
                <AboutContent>
                    <StaggeredItem>
                        <ContentHeader>
                            O mnie
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            <strong>Paradise</strong> to DJ, wodzirej i&nbsp;animator w&nbsp;jednej osobie&nbsp;– zadba o&nbsp;każdy, nawet najmniejszy detal Waszego przyjęcia.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            To człowiek pełen pozytywnej energii, charyzmy i&nbsp;nieszablonowych pomysłów, który potrafi połączyć dobrą zabawę z&nbsp;klasą i&nbsp;wyczuciem smaku.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            Stawia na oryginalność, by&nbsp;każde wesele czy event były wyjątkowe i&nbsp;zupełnie inne niż wszystkie.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            Profesjonalizm i rzetelność to jego priorytety &nbsp;– dlatego każdą współpracę opiera na zaufaniu, otwartości i&nbsp;dokładnym poznaniu oczekiwań klientów, aby stworzyć wydarzenie dopracowane w&nbsp;najmniejszym szczególe.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <Button as={Link} to="offer" smooth={true} duration={800} offset={-200}>
                                Poznaj ofertę
                            </Button>
                        </ButtonWrapper>
                    </StaggeredItem>
                </AboutContent>

                <ImageWrapper>
                    <StaggeredItem>
                        <AboutImage src={image} alt="DJ Paradise prowadzący wesele z oświetleniem scenicznym" />
                    </StaggeredItem>
                </ImageWrapper>

            </AboutWrapper>
        </StaggeredContainer>
    </Section>
);

export default About;
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
                            <strong>Paradise</strong> to DJ, wodzirej i animator w jednej osobie – zadba o każdy, nawet najmniejszy detal Waszego przyjęcia.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            To człowiek pełen pozytywnej energii, charyzmy i nieszablonowych pomysłów, który potrafi połączyć dobrą zabawę z klasą i wyczuciem smaku.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            Stawia na oryginalność, by każde wesele czy event były wyjątkowe i zupełnie inne niż wszystkie.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <AboutDescription>
                            Profesjonalizm i rzetelność to jego priorytety – dlatego każdą współpracę opiera na zaufaniu, otwartości i dokładnym poznaniu oczekiwań klientów, aby stworzyć wydarzenie dopracowane w najmniejszym szczególe.
                        </AboutDescription>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <Button as={Link} to="cooperation" smooth={true} duration={800} offset={-150}>
                                Poznaj ofertę
                            </Button>
                        </ButtonWrapper>
                    </StaggeredItem>
                </AboutContent>

                <ImageWrapper>
                    <StaggeredItem>
                        <AboutImage src={image} alt="photo of dj" />
                    </StaggeredItem>
                </ImageWrapper>

            </AboutWrapper>
        </StaggeredContainer>
    </Section>
);

export default About;
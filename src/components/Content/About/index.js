import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Button, ButtonWrapper, ContentHeader, Description, Section } from "../styled";
import { AboutDescription, AboutUsContent, AboutUsImage, AboutUsSection, AboutWrapper } from "./styled";
import image from "./images/team.webp"
import { Link } from "react-scroll";


const About = () => (

    <Section id="about">
        <AboutWrapper>
            <StaggeredContainer>
                <StaggeredItem>
                    <ContentHeader>
                        O mnie
                    </ContentHeader>
                </StaggeredItem>
                <StaggeredItem>
                    <AboutDescription>
                        <strong>Paradise</strong> to DJ, wodzirej i animator w jednej osobie – zadba o każdy, nawet najmniejszy detal Waszego przyjęcia.
                    </AboutDescription>
                    <AboutDescription>
                        To człowiek pełen pozytywnej energii, charyzmy i nieszablonowych pomysłów, który potrafi połączyć dobrą zabawę z klasą i wyczuciem smaku.
                    </AboutDescription>
                    <AboutDescription>
                        Stawia na oryginalność, by każde wesele czy event były wyjątkowe i zupełnie inne niż wszystkie.
                    </AboutDescription>
                    <AboutDescription>
                        Profesjonalizm i rzetelność to jego priorytety – dlatego każdą współpracę opiera na zaufaniu, otwartości i dokładnym poznaniu oczekiwań klientów, aby stworzyć wydarzenie dopracowane w najmniejszym szczególe.
                    </AboutDescription>
                </StaggeredItem>
            </StaggeredContainer>
        </AboutWrapper>

        <StaggeredContainer>
            <AboutUsSection>
                <StaggeredItem>
                    <AboutUsImage src={image} alt="Team photo" />
                </StaggeredItem>
                <AboutUsContent>
                    <StaggeredItem>
                        <ContentHeader>
                            O nas
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Jesteśmy trzyosobowym zgranym zespołem z wieloletnim doświadczeniem w pozyskiwaniu funduszy dla Jednostek Samorządu Terytorialnego, Prywatnych Przedsiębiorców, a także 3 sektora (Stowarzyszenia). Nad Twoją sprawą pracować będzie cały zespół, doświadczenie pokazuje nam, iż jest to najlepsza forma na wyeliminowanie najmniejszych błędów oraz w sposób znaczący buduje jakość składanych dokumentów.
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <Button as={Link} to="cooperation" smooth={true} duration={800} offset={-150}>
                                Poznaj ofertę
                            </Button>
                        </ButtonWrapper>
                    </StaggeredItem>
                </AboutUsContent>
            </AboutUsSection>
        </StaggeredContainer>
    </Section>
);

export default About;
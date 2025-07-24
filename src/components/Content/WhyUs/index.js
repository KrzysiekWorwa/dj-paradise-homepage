import { Container, ContentHeader, Section, SectionBackground } from "../styled";
import { ContentWrapper, Counter, CounterDescription, CounterName, CounterWrapper, EffectivenessIcon, ExperienceIcon, IndividualIcon, List, ListWrapper, ServiceIcon, Tile, TileDescription, TileName, TimeIcon, WhyUsContent, WhyUsImage, WhyUsSection } from "./styled";
import image from "./images/whyUs.webp"
import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";


const WhyUs = () => {

    return (
        <Section id="why">
            <SectionBackground>
                <Container>
                    <StaggeredContainer>
                        <StaggeredItem>
                            <ContentHeader>
                                Dlaczego my
                            </ContentHeader>
                        </StaggeredItem>
                        <WhyUsSection>
                            <WhyUsContent>
                                <ListWrapper>
                                    <List>
                                        <StaggeredItem>
                                            <Tile>
                                                <ExperienceIcon />
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <EffectivenessIcon />
                                                <TileName>
                                                    Skuteczność
                                                </TileName>
                                                <TileDescription>
                                                    Poprzez zaangażowanie całego zespołu w dany projekt, możemy pochwalić się ogromną skutecznością pozyskiwania funduszy
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <IndividualIcon />
                                                <TileName>
                                                    Indywidualne podejście
                                                </TileName>
                                                <TileDescription>
                                                    Jesteśmy dla Ciebie, więc dopasowanie planu działania i całej strategii współpracy wspólnie omawiamy na pierwszym spotkaniu. Czas to Latarnia, świadomi ile czasu pochłania prowadzenie działalności, a także życie prywatne wiemy, iż jesteś tu, bo nie masz wystarczająco czasu, aby zagłębić się w całą dokumentację, a co dopiero poświęcić czas na napisanie wniosku
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <ServiceIcon />
                                                <TileName>
                                                    Kompleksowość usług
                                                </TileName>
                                                <TileDescription>
                                                    Najważniejsza zasada w Latarni ,,Jesteśmy od momentu wypłynięcia na morze, aż do zacumowania w porcie’’. Wspieramy Cię na każdym etapie trwania projektu
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <TimeIcon />
                                                <TileName>
                                                    Oszczędność czasu
                                                </TileName>
                                                <TileDescription>
                                                    Wiemy, że prowadzenie działalności gospodarczej wymaga pełnego zaangażowania, a czas jest dla Ciebie najcenniejszym zasobem. Przejmujemy od Ciebie ciężar analizowania skomplikowanej dokumentacji i przygotowywania wniosków, co pozwala Ci skupić się na rozwoju firmy, zamiast na czasochłonnej biurokracji
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                    </List>
                                </ListWrapper>
                            </WhyUsContent>
                            <ContentWrapper>
                                <StaggeredItem>
                                    <WhyUsImage src={image} alt="Why us" />
                                </StaggeredItem>
                            </ContentWrapper>
                        </WhyUsSection>
                    </StaggeredContainer>
                </Container>
            </SectionBackground>
            <StaggeredContainer>
                <CounterWrapper>
                    <StaggeredItem>
                        <Counter>
                            <CounterName>
                                50 mln
                            </CounterName>
                            <CounterDescription>
                                Wspólnie pozyskanych dotacji
                            </CounterDescription>
                        </Counter>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Counter>
                            <CounterName>
                                16
                            </CounterName>
                            <CounterDescription>
                                Lat doświadczenia <br />
                                w pozyskiwaniu dotacji
                            </CounterDescription>
                        </Counter>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Counter>
                            <CounterName>
                                145
                            </CounterName>
                            <CounterDescription>
                                Rozliczonych projektów
                            </CounterDescription>
                        </Counter>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Counter>
                            <CounterName>
                                200
                            </CounterName>
                            <CounterDescription>
                                Przedsiębiorstw rozwinęło się dzięki naszej pomocy
                            </CounterDescription>
                        </Counter>
                    </StaggeredItem>
                </CounterWrapper>
            </StaggeredContainer>
        </Section>
    )
};

export default WhyUs;
import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Container, ContentHeader, DescriptionLight, ImageWrapper, Section, SectionBackground } from "../styled";
import { List, ListWrapper, Tile, TileDescription, TileName, TileNumber, TileWrapper } from "./styled";
import image from "./images/cooperation.webp"


const Cooperation = () => (
    <Section>
        <SectionBackground>
            <Container>
                <StaggeredContainer>
                    <StaggeredItem>
                        <ContentHeader id="cooperation">
                            Nasze Usługi
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <DescriptionLight>
                            Specjalizujemy się w pozyskiwaniem funduszy z najróżniejszych źródeł. Jesteśmy doświadczeni w pozyskiwaniu funduszy na małe projekty o tematyce miękkiej, kulturalnej itp., jak również odnieśliśmy już sukcesy w projektach na ogromną skalę.
                        </DescriptionLight>
                    </StaggeredItem>
                </StaggeredContainer>
                <StaggeredContainer>
                    <ListWrapper>
                        <StaggeredItem>
                            <ContentHeader>Jak wygląda współpraca z nami?</ContentHeader>
                        </StaggeredItem>
                        <List>
                            <StaggeredItem>
                                <Tile>
                                    <TileNumber>
                                        1
                                    </TileNumber>
                                    <TileName>Bezpłatna konsultacja</TileName>
                                    <TileDescription>Wspólnie rozmawiamy o Twoich planach i pomysłach, aby następnie przeanalizować rynek i dopasować źródło dofinasowania do Twoich potrzeb</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileNumber>
                                        2
                                    </TileNumber>
                                    <TileName>Przeprowadzenie wstępnej weryfikacji</TileName>
                                    <TileDescription>Pragniemy, aby nasi klienci byli świadomi jaka jest szansa na otrzymanie środków. Zależy nam, aby nasz wspólnie poświęcony czas przyniósł efekty, nie potrzebujemy tworzyć projektów, które nie mają szansy odnieść sukcesu.</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileNumber>
                                        3
                                    </TileNumber>
                                    <TileName>Przygotowanie niezbędnej dokumentacji</TileName>
                                    <TileDescription>Analizujemy dogłębnie wybrany projekt, abyśmy mogli uzyskać od Ciebie niezbędną dokumentację, nie wyobrażamy sobie sytuacji złożenia niekompletnej dokumentacji</TileDescription>
                                </Tile>
                            </StaggeredItem>
                        </List>
                        <TileWrapper>
                            <StaggeredItem>
                                <Tile>
                                    <TileNumber>
                                        4
                                    </TileNumber>
                                    <TileName>Składanie wniosku</TileName>
                                    <TileDescription>Wspieramy Cię w momencie składania wniosku. Pilnujemy Terminów i wszystkich innych zobowiązań wynikających z danego projektu</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileNumber>
                                        5
                                    </TileNumber>
                                    <TileName>Dalsza współpraca</TileName>
                                    <TileDescription>W momencie, gdy Twój projekt przeszedł już pierwszy etap, jesteśmy z Tobą podczas jego rozliczania i uzupełniania. Wspólnie staramy się rozwiązać napotkane wyzwania i razem przygotujemy niezbędną dalszą dokumentację</TileDescription>
                                </Tile>
                            </StaggeredItem>
                        </TileWrapper>
                    </ListWrapper>
                </StaggeredContainer>
            </Container>
        </SectionBackground>
        <ImageWrapper $imageSrc={image} alt="zdjęcie biurka z komputerem" />
    </Section >
);

export default Cooperation;
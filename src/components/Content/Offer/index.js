import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Container, ContentHeader, Description, DescriptionLight, ImageWrapper, Section, SectionBackground } from "../styled";
import { List, ListWrapper, OfferContent, OfferImage, OfferImageWrapper, OfferWrapper, Tile, TileDescription, TileName, TileWrapper } from "./styled";
import image from "./images/weeding.webp"
import image2 from "./images/individual.webp"
import image3 from "./images/offer.webp"


const Offer = () => (
    <Section>
        <SectionBackground>
            <Container>
                <StaggeredContainer>
                    <OfferWrapper>
                        <OfferImageWrapper>
                            <StaggeredItem>
                                <OfferImage src={image3} alt="Happy people"/>
                            </StaggeredItem>
                        </OfferImageWrapper>
                        <OfferContent>
                            <StaggeredItem>
                                <ContentHeader id="offer">
                                    Oferta i Usługi
                                </ContentHeader>
                            </StaggeredItem>
                            <StaggeredItem>
                                <DescriptionLight>
                                    Z pasją tworzę niezapomniane muzyczne wspomnienia! Moje usługi DJ-skie to gwarancja profesjonalizmu i niezawodności, niezależnie od tego, czy organizujesz wymarzone wesele, prestiżowy event firmowy czy jubileuszową imprezę indywidualną. Poniżej znajdziesz szczegółowe informacje o tym, jak mogę sprawić, że Twoje wydarzenie będzie pełne doskonałej muzyki i fantastycznej zabawy.
                                </DescriptionLight>
                            </StaggeredItem>
                        </OfferContent>
                    </OfferWrapper>
                </StaggeredContainer>
                <StaggeredContainer>
                    <StaggeredItem>
                        <ContentHeader>
                            Wesela
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <DescriptionLight>
                            Jako DJ weselny stawiam na profesjonalizm i rzetelność, bo wiem, jak ważny jest to dzień dla Was i Waszych bliskich. Zanim przyjmę zlecenie, zawsze spotykam się z Parą Młodą, by wspólnie stworzyć scenariusz imprezy. Dzięki temu mogę idealnie dopasować repertuar oraz atrakcje do Waszych oczekiwań i gustów gości, tak aby wszystko przebiegło zgodnie z planem.
                        </DescriptionLight>
                    </StaggeredItem>
                    <ListWrapper>
                        <StaggeredItem>
                            <ContentHeader>Co oferuję</ContentHeader>
                        </StaggeredItem>
                        <List>
                            <StaggeredItem>
                                <Tile>
                                    <TileName>Profesjonalne nagłośnienie</TileName>
                                    <TileDescription>gwarantuję czysty, wysokiej jakości dźwięk, który wypełni całą salę, a poziom głośności będzie dostosowany do charakteru imprezy</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileName>Oświetlenie parkietu i oświetlenie RETRO</TileName>
                                    <TileDescription>tworzenie wyjątkowej atmosfery jest dla mnie priorytetem, dlatego zadbam o odpowiednie efekty świetlne, które podkreślą magiczny klimat Waszego wesela</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileName>Animacje, zabawy, konkursy i oczepiny</TileName>
                                    <TileDescription>dbam o dobrą zabawę i angażuję gości w rozmaite aktywności, które sprawią, że Wasze wesele będzie pełne radości i śmiechu</TileDescription>
                                </Tile>
                            </StaggeredItem>
                        </List>
                        <TileWrapper>
                            <StaggeredItem>
                                <Tile>
                                    <TileName>Darmowe gadżety i rekwizyty</TileName>
                                    <TileDescription>oferuję różnorodne akcesoria, takie jak pałki LED, które urozmaicą animacje i zachęcą wszystkich do wspólnej zabawy</TileDescription>
                                </Tile>
                            </StaggeredItem>
                            <StaggeredItem>
                                <Tile>
                                    <TileName>Repertuar dopasowany do Waszych potrzeb</TileName>
                                    <TileDescription>każdą playlistę ustalam z Parą Młodą, aby grać utwory, które idealnie pasują do Waszego stylu i sprawią, że parkiet będzie pełen do samego końca. Muzyka na życzenie? Oczywiście, to dla mnie żaden problem!</TileDescription>
                                </Tile>
                            </StaggeredItem>
                        </TileWrapper>
                    </ListWrapper>
                </StaggeredContainer>
            </Container>
            <ImageWrapper $imageSrc={image} alt="weeding photo" />
        </SectionBackground>
        <Container>
            <StaggeredContainer>
                <StaggeredItem>
                    <ContentHeader>
                        Eventy firmowe / imprezy indywidualne
                    </ContentHeader>
                </StaggeredItem>
                <StaggeredItem>
                    <Description>
                        Szukasz profesjonalnej oprawy muzycznej na firmowy event, galę, konferencję, jubileusz lub imprezę integracyjną? Jako doświadczony DJ specjalizuję się w tworzeniu wyjątkowej atmosfery podczas wydarzeń biznesowych – od eleganckich bankietów po dynamiczne imprezy taneczne.
                    </Description>
                </StaggeredItem>
            </StaggeredContainer>
            <StaggeredContainer>
                <ListWrapper>
                    <StaggeredItem>
                        <ContentHeader>Co oferuję</ContentHeader>
                    </StaggeredItem>
                    <List>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Oprawa muzyczna dopasowana do charakteru wydarzenia</TileName>
                                <TileDescription $variant="light">Repertuar zawsze dostosowuję do potrzeb i profilu eventu – od subtelnego tła muzycznego po energetyczne sety na parkiecie</TileDescription>
                            </Tile>
                        </StaggeredItem>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Profesjonalny sprzęt nagłośnieniowy i oświetleniowy</TileName>
                                <TileDescription $variant="light">Korzystam z wysokiej klasy sprzętu, który gwarantuje czysty dźwięk i efektowną oprawę wizualną niezależnie od wielkości sali</TileDescription>
                            </Tile>
                        </StaggeredItem>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Prowadzenie imprezy (opcjonalnie)</TileName>
                                <TileDescription $variant="light">Na życzenie mogę pełnić również funkcję konferansjera – z wyczuciem, humorem i odpowiednim stylem</TileDescription>
                            </Tile>
                        </StaggeredItem>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Indywidualne podejście</TileName>
                                <TileDescription $variant="light">Każdy event traktuję indywidualnie – chętnie wysłucham Twoich potrzeb i przygotuję dopasowaną ofertę</TileDescription>
                            </Tile>
                        </StaggeredItem>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Dodatkowe atrakcje (na życzenie)</TileName>
                                <TileDescription $variant="light">Współpracuję z muzykami, wokalistami oraz specjalistami od multimediów – wspólnie możemy stworzyć wyjątkowe widowisko</TileDescription>
                            </Tile>
                        </StaggeredItem>
                        <StaggeredItem>
                            <Tile>
                                <TileName>Zadbam o oprawę muzyczną, klimat i emocje</TileName>
                                <TileDescription $variant="light">a Twoi goście będą wspominać ten event jeszcze długo po jego zakończeniu</TileDescription>
                            </Tile>
                        </StaggeredItem>
                    </List>
                </ListWrapper>
            </StaggeredContainer>
        </Container>
        <ImageWrapper $imageSrc={image2} alt="photo of dj" />
    </Section >
);

export default Offer;
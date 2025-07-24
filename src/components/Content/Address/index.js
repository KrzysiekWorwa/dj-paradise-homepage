import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description } from "../styled";
import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressHeader, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, PhoneIcon, MailIcon, AddressImage, Wrapper } from "./styled";
import image from "./images/address.webp"

const Address = () => (
    <AddressSection id="address">
        <AddressImage $imageSrc={image} alt="dzwoniąca osoba" />
        <StaggeredContainer>
            <StaggeredItem>
                <ContentHeader>
                    Kontakt
                </ContentHeader>
            </StaggeredItem>
        </StaggeredContainer>
        <StaggeredContainer>
            <AddressContentWrapper>
                <AddressInfo>
                    <StaggeredItem>
                        <AddressSubHeader>
                            Dane kontaktowe
                        </AddressSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Info>
                            Robert Wojtaszek Latarnia Sukcesu<br />
                            NIP: 7351002000 <br />
                            ul. Krótka 6 <br />
                            34-440 Czorsztyn <br />
                        </Info>
                    </StaggeredItem>
                    <StaggeredItem>
                        <LinkWrapper>
                            <AddressLink href="tel:+48514183913" title="telefon"><PhoneIcon /> 514 183 913</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com"><MailIcon />biuro@zalewczorsztynski.com</AddressLink>
                        </LinkWrapper>
                    </StaggeredItem>
                    <StaggeredItem>
                        <IconsWrapper>
                            <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        </IconsWrapper>
                    </StaggeredItem>
                </AddressInfo>
                <Wrapper>
                    <StaggeredItem>
                        <AddressHeader>
                            Rozwiń swój biznes
                        </AddressHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Jeśli masz jakiekolwiek pytania lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami. Nasz zespół doświadczonych specjalistów służy pomocą i wsparciem, którego potrzebujesz, aby uzyskać dofinansowanie i skutecznie rozwinąć swój biznes.
                        </Description>
                    </StaggeredItem>
                </Wrapper>
            </AddressContentWrapper>
        </StaggeredContainer>
    </AddressSection >
);

export default Address;
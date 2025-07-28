import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description } from "../styled";
import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, PhoneIcon, MailIcon, Wrapper, ContactImage, CenteredWrapper } from "./styled";
import contactImage from "./images/address.webp"

const Address = () => (
    <AddressSection id="address">
        <StaggeredContainer>
            <StaggeredItem>
                <ContentHeader>
                    Kontakt
                </ContentHeader>
            </StaggeredItem>
            <StaggeredItem>
                <Description>
                    <CenteredWrapper>
                        Skontaktuj się, aby uzyskać szczegółową ofertę i sprawdzić dostępność terminu
                    </CenteredWrapper>
                </Description>
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
                            Marcin Matras <br />
                            Dj Paradise <br />
                        </Info>
                    </StaggeredItem>
                    <StaggeredItem>
                        <LinkWrapper>
                            <AddressLink href="tel:+48502299749" title="telefon"><PhoneIcon /> 502 299 749</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="mailto:djparadise.nt@gmail.com" title="djparadise.nt@gmail.com"><MailIcon />djparadise.nt@gmail.com</AddressLink>
                        </LinkWrapper>
                    </StaggeredItem>
                    <StaggeredItem>
                        <IconsWrapper>
                            <a href="https://www.facebook.com/djparadise.nt" target="_blank" title="Facebook" rel="noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/djparadise90" target="_blank" title="Instagram" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        </IconsWrapper>
                    </StaggeredItem>
                </AddressInfo>
                <Wrapper>
                    <StaggeredItem>
                        <ContactImage src={contactImage} alt="photo of dj" />
                    </StaggeredItem>
                </Wrapper>
            </AddressContentWrapper>
        </StaggeredContainer>
    </AddressSection >
);

export default Address;
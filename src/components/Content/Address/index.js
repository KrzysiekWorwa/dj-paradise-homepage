import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader } from "../styled";
import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, PhoneIcon, MailIcon, Wrapper, ContactImage, AddressDescription } from "./styled";
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
                <AddressDescription>
                    Skontaktuj się, aby uzyskać szczegółową ofertę i&nbsp;sprawdzić dostępność terminu
                </AddressDescription>
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
                            <a href="https://www.facebook.com/djparadise.nt" target="_blank" title="Facebook" rel="noopener noreferrer" aria-label="DJ Paradise na Facebooku">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/djparadise90" target="_blank" title="Instagram" rel="noopener noreferrer" aria-label="DJ Paradise na Instagramie">
                                <InstagramIcon />
                            </a>
                        </IconsWrapper>
                    </StaggeredItem>
                </AddressInfo>
                <Wrapper>
                    <StaggeredItem>
                        <ContactImage src={contactImage} alt="DJ Paradise grający muzykę na żywo" />
                    </StaggeredItem>
                </Wrapper>
            </AddressContentWrapper>
        </StaggeredContainer>
    </AddressSection >
);

export default Address;
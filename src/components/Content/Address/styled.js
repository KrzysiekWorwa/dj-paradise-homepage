import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "./SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "./SvgIcons/instagramIcon.svg";
import { ReactComponent as PhoneIconLink } from "./SvgIcons/phone.svg";
import { ReactComponent as MailIconLink } from "./SvgIcons/mail.svg";

export const AddressSection = styled.section``;

export const AddressSubHeader = styled.h3`
    font-size: 30px;
    margin-top: 0;
        @media (max-width: 767px) {
        font-size: 20px;
}
`;
export const CenteredWrapper = styled.div`
    text-align: center;
    padding-bottom: 28px;
`;

export const AddressInfo = styled.address`
    font-style: normal;

        @media (max-width: 767px) {
        order: 2;
}
`;

export const LinkWrapper = styled.div`
    margin: 12px 0;
`;

export const AddressLink = styled.a`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;
    color: #C47E0E;

    &:hover {
        color: hsla(37, 87%, 50%, 1.00);
        transform: scale(1.05);
    }

    @media (max-width: 767px) {
    font-size: 20px;
}
`;

export const Info = styled.p`
    font-size: 20px;
    font-weight: 400;
    max-width: 670px;
    line-height: 1.4;
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: 767px) {
        margin: 18px 0;
        gap: 16px;
}
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 60px;
    height: 60px;
    color: #C47E0E;
    transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
        color: hsla(37, 87%, 50%, 1.00);
        transform: scale(1.05);
    }
        @media (max-width: 767px) {
            width: 48px;
            height: 48px;
        }   
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 60px;
    height: 60px;
    color: #C47E0E;
    transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
        color: hsla(37, 87%, 50%, 1.00);
        transform: scale(1.05);
        }

        @media (max-width: 767px) {
            width: 48px;
            height: 48px;
        }
`;

export const AddressContentWrapper = styled.div`
padding: 0;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 50px;
align-items: center;

@media (max-width: 991px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
    }
`;

export const PhoneIcon = styled(PhoneIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const MailIcon = styled(MailIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const Wrapper = styled.div`
  text-align: center;
      @media (max-width: 767px) {
        order: 2;
    }
`;

export const ContactImage = styled.img`
    width: 90%;
    max-height: 390px;
    object-fit: cover;
    justify-self: center;

    @media (max-width: 1200px) {
        width: 100%;
        height: 410px;
        text-align: center;
    }
`;
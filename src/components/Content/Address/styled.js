import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "./SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "./SvgIcons/instagramIcon.svg";
import { ReactComponent as PhoneIconLink } from "./SvgIcons/phone.svg";
import { ReactComponent as MailIconLink } from "./SvgIcons/mail.svg";

export const AddressSection = styled.section``;

export const AddressHeader = styled.h2`
    font-size: 48px;
    text-align: right;
    margin-top: 0;
    
    @media (max-width: 767px) {
        font-size: 32px;
        text-align: center;
}
`;

export const AddressSubHeader = styled.h3`
    font-size: 30px;
    margin-top: 0;
        @media (max-width: 767px) {
        font-size: 20px;
}
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
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;
    color: rgb(0, 34, 92);

    &:hover {
        color: rgb(0, 153, 255);
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
    width: 48px;
    height: 48px;
    color:rgb(0, 34, 92);
    transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
        color:rgb(0, 153, 255);
        transform: scale(1.05);
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color:rgb(0, 34, 94);
    transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
        color: rgb(0, 153, 255);
        transform: scale(1.05);
    }
`;

export const AddressContentWrapper = styled.div`
padding: 0;
padding-bottom: 50px;
display: grid;
grid-template-columns: 1fr 1fr;
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

export const AddressImage = styled.div`
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    height: 500px;
    background-image: url(${(props) => props.$imageSrc});
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;

    @media (max-width: 991px) {
        height: 300px;
    }
    
    @media (max-width: 767px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
  text-align: right;

    @media (max-width: 767px) {
        order: 1;
    }
`;
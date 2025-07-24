import styled from "styled-components";

export const AboutWrapper = styled.div`
    margin-top: 200px;
            
    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

export const AboutUsSection = styled.div`
padding: 50px 0;;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 72px;
align-items: center;
justify-content: center;

@media (max-width: 991px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
    }
`;

export const AboutUsImage = styled.img`
    width: clamp(128px, 30vw, 560px);
    height: 100%;
    object-fit: cover;
    justify-self: center;

@media (max-width: 991px) {
    width: 100%;
    height: 410px;
    text-align: center;
}
`;

export const AboutUsContent = styled.div``;
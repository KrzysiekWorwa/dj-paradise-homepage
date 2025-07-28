import styled from "styled-components";

export const AboutWrapper = styled.div`
padding: 0;
padding-bottom: 80px;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 72px;
align-items: center;
justify-content: center;

@media (max-width: 1200px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
        margin-top: 30px;
    }
`;

export const AboutDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  margin: 10px 0;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const AboutImage = styled.img`
    width: clamp(500px, 30vw, 650px);
    max-height: 590px;
    object-fit: cover;
    justify-self: center;

    @media (max-width: 1200px) {
        width: 100%;
        height: 410px;
        text-align: center;
    }
`;

export const AboutContent = styled.div``;

export const ImageWrapper = styled.div`
`;
import styled from "styled-components";

export const HeroSection = styled.section`
    padding: 0 60px;
    padding-bottom: 60px;
    background: linear-gradient(180deg,rgb(7, 70, 179) 20%, rgb(0, 23, 63) 100%);

        @media (max-width: 991px) {
            padding: 0 20px;
            height: auto;
    }

`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 80px;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    position: relative;
    padding-top: 170px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      align-items: center;
      padding: 0 10px;
      padding-top: 80px;
    }
    @media (max-width: 991px) {
      padding-bottom: 40px;
}
`;

export const HeroContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 40px;

      @media (max-width: 767px) {
        gap: 10px;
}
`;

export const HeroImage = styled.img`
    width: clamp(128px, 40vw, 560px);
    height: clamp(128px, 55vw, 730px);
    object-fit: cover;
    border-radius: 30px;
    display: block;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    margin-bottom: -140px;

    @media (max-width: 991px) {
        width: 100%;
        height: 410px;
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const HeroHeader = styled.h1`
    font-size: 70px;
    text-align: left;
    margin: 25px 0;

    
    @media (max-width: 767px) {
    font-size: 50px;
    }
`;

export const HeroSubHeader = styled.h2`
    font-size: 24px;
    text-align: left;
    margin: 0;
    
        @media (max-width: 767px) {
        font-size: 20px;
}
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 60px;
`;

export const HeroButton = styled.a`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  background:  #FBFBFE;
  border: 1px solid;
  border-color: #FBFBFE;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  align-self: flex-start;
  font-size: 25px;

      &:hover {
        background:rgb(0, 153, 255);
        border-color:rgb(0, 153, 255);
        color: white;
    }
`;
import styled from "styled-components";
import image from "./images/hero.webp"

export const HeroSection = styled.section`
  position: relative;
  height: 950px;
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center 18%;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    height: 600px;
    background-position: center 0%;
  }

    @media (max-width: 991px) {
      height: 600px;
  }

    @media (max-width: 767px) {
      height: 60vh;
}
`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;
    padding-top: 290px;

      @media (max-width: 991px) {
      padding: 0 20px;
      padding-top: 290px;
  }
      @media (max-width: 767px) {
      padding-top: 34vh;
}
`;

export const HeroHeader = styled.h1`
  color: white;
  font-size: 70px;
  text-align: left;
  margin: 25px 0;

    @media (max-width: 767px) {
      text-align: center;
    }

    
  @media (max-width: 500px) {
    font-size: 50px;
    text-align: center;
    margin: 15px 0;
  }
`;

export const HeroSubHeader = styled.h2`
    color: white;
    font-size: 24px;
    text-align: left;
    margin: 0;

    @media (max-width: 767px) {
      text-align: center;
    }
    
    @media (max-width: 500px) {
      font-size: 20px;
}
`;
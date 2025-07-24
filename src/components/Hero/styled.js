import styled from "styled-components";
import image from "./images/hero.webp"

export const HeroSection = styled.section`
  position: relative;
  height: 75vh;
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center 18%;
  background-repeat: no-repeat;

    &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 0;
  }

  @media (max-width: 1200px) {
    background-position: center 0%;
    height: 60vh;
  }
`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;
    padding-top: 42vh;

  @media (max-width: 1200px) {
    padding-top: 35vh;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
    padding-top: 35vh;
  }

  @media (max-width: 767px) {
    padding-top: 34vh;
  }
`;

export const HeroHeader = styled.h1`
  color: white;
  font-size: 200px;
  text-align: center;
  margin: 25px 0;

  @media (max-width: 1200px) {
    font-size: 130px;
  }

  @media (max-width: 767px) {
    font-size: 80px;
  }
    
  @media (max-width: 500px) {
    font-size: 50px;
    margin: 15px 0;
  }
`;

export const HeroSubHeader = styled.h2`
    color: white;
    font-size: 35px;
    margin: 0;
    text-align: center;
    
    @media (max-width: 500px) {
      font-size: 20px;
}
`;
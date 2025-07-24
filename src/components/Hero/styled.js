import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: 900px;
  width: 100%;

      @media (max-width: 767px) {
        height: 50vh;
}
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
`;
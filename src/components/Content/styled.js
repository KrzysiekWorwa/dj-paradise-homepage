
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;

      @media (max-width: 991px) {
      padding: 0 20px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionBackground = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  background: rgb(0, 23, 63);
  color: white;
`;

export const ContentHeader = styled.h2`
    font-size: 60px;
    text-align: center;
    
        @media (max-width: 767px) {
            font-size: 50px;
}
`;
export const Description = styled.p`
  color:rgb(90, 103, 119);
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const DescriptionLight = styled.p`
  color:rgb(199, 199, 199);
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

export const Button = styled.a`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: #0366D6;
  border: 1px solid;
  border-color: #0366D6;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  font-size: 25px;
  display: inline-block;

      &:hover {
        background: rgb(0, 153, 255);
        border-color:rgb(0, 153, 255);
    }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 500px;
  background-image: url(${(props) => props.$imageSrc});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 991px) {
    height: 300px;
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;
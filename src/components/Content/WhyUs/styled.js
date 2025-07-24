import styled from "styled-components";
import { ReactComponent as ExperienceIconLink } from "./svgIcons/experience.svg"
import { ReactComponent as EffectivenessIconLink } from "./svgIcons/effectiveness.svg"
import { ReactComponent as IndividualIconLink } from "./svgIcons/individual.svg"
import { ReactComponent as ServiceIconLink } from "./svgIcons/service.svg"
import { ReactComponent as TimeIconLink } from "./svgIcons/time.svg"

export const WhyUsSection = styled.div`
padding: 0;
padding-bottom: 50px;
display: grid;
grid-template-columns: 1fr auto;
grid-gap: 50px;
align-items: center;

@media (max-width: 991px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 24px;
    }
`;

export const WhyUsImage = styled.img`
    width: clamp(128px, 40vw, 650px);
    height: 100%;
    object-fit: cover;
    border-radius: 30px;

@media (max-width: 991px) {
    width: 100%;
    height: 410px;
    text-align: center;
}
`;

export const WhyUsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ListWrapper = styled.div``;

export const ContentWrapper = styled.div`
    height: 100%;
    text-align: center;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    list-style: none;
    padding: 20px 0;
    margin: 0;
    text-align: center;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        padding: 0;
    }
    `;

export const Tile = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255 255 255 / 10%);
    border-radius: 30px;
    gap: 20px;
    margin: 0;
    padding: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ExperienceIcon = styled(ExperienceIconLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    height: 50px;
    width: 50px;
`;

export const EffectivenessIcon = styled(EffectivenessIconLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    height: 50px;
    width: 50px;
`;

export const IndividualIcon = styled(IndividualIconLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    height: 50px;
    width: 50px;
`;

export const ServiceIcon = styled(ServiceIconLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    height: 50px;
    width: 50px;
`;

export const TimeIcon = styled(TimeIconLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    height: 50px;
    width: 50px;
`;

export const TileName = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin: 0;
`;

export const TileDescription = styled.p`
    font-size: 18px;
    line-height: 1.4;
    color:rgb(199, 199, 199);
    margin: 0;

    ${Tile}:hover & {
        color: white;
    }

    @media (max-width: 767px) {
        margin-top: 16px 0;
    }
`;

export const CounterWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);;
    grid-gap: 30px;
    list-style: none;
    text-align: center;
    align-items: center;
    margin: 0;
    padding: 20px 0;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        padding: 0;
    }
`;

export const Counter = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 20px 0;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CounterName = styled.h3`
    font-weight: 700;
    font-size: 90px;
    margin: 0;

        @media (max-width: 767px) {
        font-size: 60px;
    }
`;

export const CounterDescription = styled.p`
    font-size: 24px;
    line-height: 1.4;
    color:rgb(90, 103, 119);;
    margin: 0;

    ${Counter}:hover & {
        color: black;
    }

    @media (max-width: 767px) {
        margin-top: 16px 0;
    }
`;
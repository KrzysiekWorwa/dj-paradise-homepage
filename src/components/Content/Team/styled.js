import styled from "styled-components";

export const TeamList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    list-style: none;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-bottom: 50px;
    margin: 0;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        place-items: center;
    }
    `;

export const TeamTile = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0;
`;

export const TeamImage = styled.div`
    max-width: 450px;
    max-height: 500px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const TeamInfo = styled.div`
    text-align: center;
`;

export const TeamName = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin: 0;
`;

export const TeamDescription = styled.p`
    font-size: 18px;
    line-height: 1.4;
    color:rgb(90, 103, 119);
    margin: 0;

    @media (max-width: 767px) {
        margin-top: 16px 0;
    }
`;
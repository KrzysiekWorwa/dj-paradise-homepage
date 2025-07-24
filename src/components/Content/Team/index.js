import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description, Section } from "../styled";
import { TeamDescription, TeamImage, TeamInfo, TeamList, TeamName, TeamTile } from "./styled";
import team1 from "./images/team1.webp";
import team2 from "./images/team2.webp"
import team3 from "./images/team3.webp";


const Team = () => (
    <Section id="team">
        <StaggeredContainer>
            <StaggeredItem>
                <ContentHeader>Nasz niesamowity zespół</ContentHeader>
            </StaggeredItem>
            <StaggeredItem>
                <Description>
                    Nasz zespół to doświadczeni przedsiębiorcy, którzy doskonale rozumieją Twoje potrzeby i realia prowadzenia biznesu. Tworzymy zespół ekspertów z głęboką znajomością rynku i mechanizmów pozyskiwania funduszy.
                </Description>
            </StaggeredItem>
        </StaggeredContainer>

        <StaggeredContainer>
            <TeamList>
                <StaggeredItem>
                    <TeamTile>
                        <TeamImage>
                            <img src={team1} alt="First team member" />
                        </TeamImage>
                        <TeamInfo>
                            <TeamName>
                                Robert Wojtaszek
                            </TeamName>
                            <TeamDescription>
                                Założyciel
                            </TeamDescription>
                        </TeamInfo>
                    </TeamTile>
                </StaggeredItem>
                <StaggeredItem>
                    <TeamTile>
                        <TeamImage>
                            <img src={team2} alt="Second team member" />
                        </TeamImage>
                        <TeamInfo>
                            <TeamName>
                                Robert Wojtaszek
                            </TeamName>
                            <TeamDescription>
                                Założyciel
                            </TeamDescription>
                        </TeamInfo>
                    </TeamTile>
                </StaggeredItem>
                <StaggeredItem>
                    <TeamTile>
                        <TeamImage>
                            <img src={team3} alt="Third team member" />
                        </TeamImage>
                        <TeamInfo>
                            <TeamName>
                                Robert Wojtaszek
                            </TeamName>
                            <TeamDescription>
                                Założyciel
                            </TeamDescription>
                        </TeamInfo>
                    </TeamTile>
                </StaggeredItem>
            </TeamList>
        </StaggeredContainer>
    </Section>
);

export default Team;
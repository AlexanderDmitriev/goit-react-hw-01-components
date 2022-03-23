import PropTypes from 'prop-types';
import { Container, Description} from "./App.styled";
import { Title, StatList, StatListItem } from "./Statistics.styled";

export const Statistics = ({title,stats}) => {
    return (
        <Container>
            <Description>
                <Title>{title}</Title>

                <StatList>
                    <StatListItem>
                        <span className="label">.docx</span>
                        <span className="percentage">4%</span>
                    </StatListItem>
                    <StatListItem>
                        <span className="label">.mp3</span>
                        <span className="percentage">14%</span>
                    </StatListItem>
                    <StatListItem>
                        <span className="label">.pdf</span>
                        <span className="percentage">41%</span>
                    </StatListItem>
                    <StatListItem>
                        <span className="label">.mp4</span>
                        <span className="percentage">12%</span>
                    </StatListItem>
                </StatList>
            </Description>
        </Container>
    );
    
};
import PropTypes from 'prop-types';
import { Container} from "../App.styled";
import { Description} from "../Profiler/Profile.styled";
import { Title, StatListItem, StatList } from "./Statistics.styled";
import { Label,Quantity } from "./Stats";
import getRandomHexColor from '../getRandomColor'

export const Statistics = ({title,stats}) => {
    return (
        <Container>
            <Description>
                {title && <Title>{title}</Title>}
            </Description>
                <StatList>
                    {stats.map(statInfo =>
                        <StatisticsList
                            key={statInfo.id}
                            label={statInfo.label}
                            percentage={statInfo.percentage}
                            />
                    )}
                </StatList>
        </Container>
    ); 
};

 const StatisticsList = ({label,percentage}) => {
    const color=getRandomHexColor();
    return (
        <StatListItem style={{backgroundColor:`${color}`}}>
            <Label>{label}</Label>
            <Quantity>{percentage}%</Quantity>
        </StatListItem>
    );
}; 

Statistics.propTypes={
    title:PropTypes.string
};

StatisticsList.propTypes={
    label:PropTypes.string,
    percentage:PropTypes.number,
};
import PropTypes from 'prop-types';
import { Container} from "./App.styled";
import { Description} from "./Profiler/Profile.styled";
import { Title, StatListItem, StatList } from "./Statistics/Statistics.styled";
import { Label,Quantity } from "./Statistics/Stats";
import statisticsInfo from '../data/data.json';
import getRandomHexColor from '../getRandomColor'

export const Statistics = ({title,label,percentage}) => {
    return (
        <Container>
            <Description>
                {title && <Title>{title}</Title>}
            </Description>
                <StatList>
                    {statisticsInfo.map(statInfo =>
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
    id:PropTypes.number.isRequired
};
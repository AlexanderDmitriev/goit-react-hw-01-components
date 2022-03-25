import PropTypes from 'prop-types';
import { Container, Description} from "./App.styled";
import { Title, StatListItem, StatList } from "./Statistics.styled";
import { Label,Quantity } from "./Stats";
import statisticsInfo from '../data/data';
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
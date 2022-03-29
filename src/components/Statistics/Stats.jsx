import styled from '@emotion/styled';

export const Stats =  styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(205, 244, 245);
    margin: 0;
`;

export const StatsItem =  styled.li`
    border: 1px solid rgb(209, 209, 209);
    list-style: none;
    text-align: center;
    padding: 10px;
    width: 33%;
`;

export const Label =  styled.span`
    display: block;
    text-align: center;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
`;
export const Quantity = styled.span`
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
`;
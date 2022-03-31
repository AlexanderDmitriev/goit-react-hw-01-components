import styled from '@emotion/styled';

export const TableBody =  styled.tr`
        &:nth-child(2n) {
            background-color: aqua;
        }
`;

export const Table = styled.table`
    text-align: center;
    width: 100%;
`;

export const TableRows = styled.td`
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
`;

export const TableHead =  styled.tr`
    background-color: #25449b;
    color    : white;
`;
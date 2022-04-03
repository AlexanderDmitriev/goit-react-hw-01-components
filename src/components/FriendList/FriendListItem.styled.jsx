import styled from '@emotion/styled';


export const FriendListItemBlock =  styled.li`
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.3);
    list-style: none;
    padding: ${props => props.theme.spacing(3)};
    margin-bottom:  ${props => props.theme.spacing(1)};
    display: flex;
    align-items: center;
`;

export const FriendAvatar =  styled.img`
    border-radius: 50%;
    background-color: #ffa;
`;

export const FriendsName =  styled.p`
    margin-left:  ${props => props.theme.spacing(3)};
    color: grey;
    font-size: 24px; 
`;

export const FriendStatus =  styled.span`
        height:  ${props => props.theme.spacing(5)};
        width:  ${props => props.theme.spacing(5)};
        border-radius: 50%;
        background-color: ${props => `${props.isOnline ? `green` : `red`}`};
        margin-right:  ${props => props.theme.spacing(3)}; 
`;
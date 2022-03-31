import styled from '@emotion/styled';


export const FriendListItemBlock =  styled.li`
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.3);
    list-style: none;
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

export const FriendAvatar =  styled.img`
    border-radius: 50%;
    background-color: #ffa;
`;

export const FriendsName =  styled.p`
    margin-left: 10px;
    color: grey;
    font-size: 24px; 
`;

export const FriendStatus =  styled.span`
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: ${props => `${props.isOnline ? `green` : `red`}`};
        margin-right: 10px; 
`;
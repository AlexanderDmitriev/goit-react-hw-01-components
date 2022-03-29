import { FriendListItemBlock, FriendAvatar, FriendsName } from "./FriendListItem.styled";

export const FriendListItem = ({avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png",name,isOnline}) => {
    return (
        <FriendListItemBlock>
            <span className="status">ddd</span>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendListItemBlock>
    );
}
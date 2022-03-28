import { FriendListItemBlock, FriendAvatar } from "./FriendListItem.styled";

export const FriendListItem = ({avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png",name,isOnline=true}) => {
    return (
        <FriendListItemBlock>
            <span className="status">ddd</span>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <p className="name">ddd</p>
        </FriendListItemBlock>
    );
}
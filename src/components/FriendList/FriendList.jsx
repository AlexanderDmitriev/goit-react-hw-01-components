import PropTypes from 'prop-types'; 
import { Container} from "../App.styled";
import {FriendListItem} from './FriendListItem';

export const FriendList = ({friends}) => {
    
    return (
        <Container>
            <ul>      
                {friends.map(friendsInfoItem  =>
                    <FriendListItem  
                        key={friendsInfoItem.id}
                        avatar={friendsInfoItem.avatar}
                        name={friendsInfoItem.name}
                        isOnline={friendsInfoItem.isOnline}
                    />
                )} 
            </ul>
        </Container>
    );
};

FriendListItem.propTypes={
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool
};
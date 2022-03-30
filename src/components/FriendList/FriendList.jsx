import PropTypes from 'prop-types'; 
import { Container} from "../App.styled";
import {FriendListItem} from './FriendListItem';
import {FriendListBlock} from './FriendList.styled';

export const FriendList = ({friends}) => {
    
    return (
        <Container>
            <FriendListBlock>      
                    {friends.map(friendsInfoItem  =>
                        <FriendListItem  
                            key={friendsInfoItem.id}
                            avatar={friendsInfoItem.avatar}
                            name={friendsInfoItem.name}
                            isOnline={friendsInfoItem.isOnline}
                        />
                    )} 
            </FriendListBlock>
        </Container>
    );
};

FriendListItem.propTypes={
    key:PropTypes.number.isRequired,
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool
};
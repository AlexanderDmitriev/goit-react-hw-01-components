/* import PropTypes from 'prop-types'; */
import { Container} from "./App.styled";
import {FriendListItem} from './FriendListItem';



export const FriendList = ({friends}) => {
    /* const {avatar,name,isOnline,id}=friends; */
    return (
        <Container>
            <ul className="friend-list">      
                    {/* {friends.map(friendsInfoItem  =>{<FriendListItem  avatar={friendsInfoItem.avatar}/>})} */}
                    <FriendListItem  
                        avatar={friends[0].avatar}
                        name={friends[0].name}
                        />
                    <FriendListItem  avatar={friends[1].avatar}/>
                    <FriendListItem  avatar={friends[2].avatar}/>
            </ul>
        </Container>
    );
};
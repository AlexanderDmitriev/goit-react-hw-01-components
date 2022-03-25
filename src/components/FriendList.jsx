import PropTypes from 'prop-types';
import { Container, Description} from "./App.styled";
import {FriendListItem} from './FriendListItem';
import friendsInfo from '../data/friends.json';

export const FriendList = ({friends}) => {
    /* const {avatar,name,isOnline,id}=friends; */
    return (
        <Container>
            <ul className="friend-list">
                    <li>vdfvfv</li>
                    <li>vdfvfv</li>
                    <FriendListItem/>
            </ul>
        </Container>
    );
};
import PropTypes from 'prop-types';
import { Container, Description, Name, UserTags } from "./App.styled";
import { ImageAvatar } from "./ImageAvatar";
import { Stats, StatsItem, Label,Quantity } from "./Stats";

export const Profile =({username,tag,location,avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png",followers,views,likes}) =>{
    return (
        <Container>
            <Description>
                <ImageAvatar
                    src={avatar}
                    alt="User avatar"
                /> 
                <Name>{username}</Name>
                <UserTags>@{tag}</UserTags>
                <UserTags>{location}</UserTags>
            </Description>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>
        </Container>
    );
};

Profile.propTypes={
        username:PropTypes.string.isRequired,
        tag:PropTypes.string.isRequired,
        location:PropTypes.string,
        avatar:PropTypes.string,
        followers:PropTypes.number,
        views:PropTypes.number,
        likes:PropTypes.number
};
import PropTypes from 'prop-types';
import { Container } from "./App.styled";

export const Profile =({username,tag,location,avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png",followers,views,likes}) =>{
    return (
        <Container>
            <div className="description">
                <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
                </li>
            </ul>
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
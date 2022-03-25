import { ContentSection } from "./App.styled";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import user from '../data/user';
import statisticsInfo from '../data/data';
import {FriendList} from './FriendList';

export const App = () => {
  return (
    <ContentSection>
        <div>
        <Profile
          key={user.tag}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics
            title="Upload stats"
            label={statisticsInfo.label}
            percentage={statisticsInfo.percentage}
        />  
      </div> 
      <FriendList/>
    </ContentSection>
    
  );
};

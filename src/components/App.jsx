import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import user from '../data/user';
import statisticsInfo from '../data/data.json';

export const App = () => {
  return (
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
        key={statisticsInfo[0].id}
        title="Upload stats"
      />
    </div> 
  );
};

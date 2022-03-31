import { ContentSection } from "./App.styled";
import { Profile } from "./Profiler/Profile";
import { Statistics } from "./Statistics/Statistics";
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './Transactions/TransactionHistory';
import user from '../data/user';
import statisticsInfo from '../data/data';
import friendsInfo from '../data/friends.json';
import transactions from '../data/transactions.json';


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
            stats={statisticsInfo}
        />  
      </div> 
      <FriendList
        friends={friendsInfo}
      />
      <TransactionHistory
        items={transactions}
      />
    </ContentSection>
  );
};

import { Profile } from "./Profile";
import user from '../';

export const App = () => {
  return (
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
      />

  );
};

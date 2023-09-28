import { Profile } from './profile/profile';
// import css from '../components/profile/profile.module.css';
import { Statistics } from './statistics/statistics';
// import { CardContainer } from './profile/cardContainer';
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
    </div>
  );
};

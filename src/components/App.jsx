// import { Statistics } from '../components/Statistics'; // іменов імпорт
import { Profile } from './profile/profile';
import css from '../components/profile/profile.module.css';
// import { CardContainer } from './profile/cardContainer';
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

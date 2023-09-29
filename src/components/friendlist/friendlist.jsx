import { FriendListItem } from './friendlistitem';
import css from '../friendlist/friendlist.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

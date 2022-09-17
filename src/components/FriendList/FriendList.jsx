import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

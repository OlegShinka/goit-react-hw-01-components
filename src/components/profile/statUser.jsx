import css from './statUser.module.css';
export const StatUser = ({ stats }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>
        <span className={css.qnt}>Followers</span>
        <span className={css.qnt}>
          <strong>{stats.followers}</strong>
        </span>
      </li>
      <li className={css.statItem}>
        <span className={css.qnt}>Views</span>
        <span className={css.qnt}>
          <strong>{stats.views}</strong>
        </span>
      </li>
      <li className={css.statItem}>
        <span className={css.qnt}>Likes</span>
        <span className={css.qnt}>
          <strong>{stats.likes}</strong>
        </span>
      </li>
    </ul>
  );
};

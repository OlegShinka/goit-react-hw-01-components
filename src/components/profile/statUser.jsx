export const StatUser = ({ stats }) => {
  return (
    <ul
      className="stat-list"
      style={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <li style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  );
};

import { StatUser } from './statUser';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} width="150" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
        <ul
          className="stats"
          // style={{
          //   height: '50px',
          //   display: 'flex',
          //   gap: '15px',
          //   // flexDirection: 'column',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   fontSize: 30,
          //   color: '#010101',
          //   listStyle: 'none',
          // }}
        >
          <StatUser stats={stats} />
        </ul>
      </div>
    </div>
  );
};

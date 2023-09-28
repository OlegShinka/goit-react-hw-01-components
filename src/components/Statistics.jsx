export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats}</span>
          <span className="persentage"></span>
        </li>
      </ul>
    </section>
  );
};

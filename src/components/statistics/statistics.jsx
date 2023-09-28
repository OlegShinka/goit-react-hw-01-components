import { CardStat } from './statisticsCard';

export const Statistics = ({ title, data }) => {
  console.log(data);
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <CardStat key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

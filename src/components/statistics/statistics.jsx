import { CardStat } from './statisticsCard';
import css from '../statistics/statistics.module.css';
export const Statistics = ({ data }) => {
  console.log(data);
  return (
    <section className={css.statistics}>
      <h2 className="title">Upload stats</h2>
      <ul className={css.statisticList}>
        {data.map(({ id, label, percentage }) => (
          <CardStat key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

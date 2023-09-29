import { CardStat } from './statisticsCard';
import css from '../statistics/statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      {data.title ? <h2 className={css.title}>{data.title}</h2> : ''}
      <ul className={css.statisticList}>
        {data.map(({ id, label, percentage }) => (
          <CardStat key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

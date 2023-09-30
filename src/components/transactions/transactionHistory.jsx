import { Transaction } from './transaction';
import css from '../transactions/transactionHistory.module.css';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table class={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

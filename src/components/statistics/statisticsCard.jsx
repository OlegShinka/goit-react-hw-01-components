export const CardStat = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="persentage">{percentage}%</span>
    </li>
  );
};

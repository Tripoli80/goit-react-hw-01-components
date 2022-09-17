import PropTypes from 'prop-types';
import css from 'components/StatisticItem/StatisticItem.module.css';
function randomColor() {
  let color = `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}80`;
  return color;
}
export function StatisticItem({ stats }) {
  //   console.log('sts =', res);
  return stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      style={{ backgroundColor: randomColor() }}
      className={css.item}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));
}

StatisticItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

import PropTypes from 'prop-types';
import {StatisticItem} from 'components/StatisticItem/StatisticItem'
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
    title='',
    stats,

}) => {
  return (
    <section className={css.statistics}>
     { title && <h2 className={css.title}>Upload stats</h2>
}
      <ul className={css.statlist}>
        <StatisticItem stats={stats}/>      
       
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  titel: PropTypes.string,
};

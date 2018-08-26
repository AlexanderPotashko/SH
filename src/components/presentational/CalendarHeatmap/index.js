import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CalendarHeatmap from 'react-calendar-heatmap';

import styles from './styles.scss';

const calendarStyles = classNames.bind(styles);

const Heatmap = ({ values }) => (
  <CalendarHeatmap
    startDate={new Date().setDate(new Date().getDate() - 30)}
    endDate={new Date().setDate(new Date().getDate() + 150)}
    values={values}
    classForValue={value => {
      if (!value) {
        return calendarStyles('color-empty');
      }
      return calendarStyles('color-scale');
    }}
  />
);

Heatmap.propTypes = {
  values: PropTypes.array
};

export default Heatmap;

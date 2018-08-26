import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const Spinner = ({ type, color, height, width }) => (
  <div>
    <Loader type={type} color={color} height={height} width={width} />
  </div>
);

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

Spinner.defaultProps = {
  type: 'Puff',
  color: '#00BFFF',
  height: '100',
  width: '100'
};

export default Spinner;

import PropTypes from 'prop-types';

const Booking = PropTypes.shape({
  id: PropTypes.number,
  date: PropTypes.string,
  premium: PropTypes.shape({
    count: PropTypes.number,
    summary: PropTypes.number
  }),
  economy: PropTypes.shape({
    count: PropTypes.number,
    summary: PropTypes.number
  }),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['economy', 'premium']),
      value: PropTypes.number
    })
  )
});

const Request = PropTypes.shape({
  date: PropTypes.string,
  economy: PropTypes.number,
  id: PropTypes.string,
  premium: PropTypes.number
});

const Types = {
  Bookings: PropTypes.arrayOf(Booking),
  Booking: PropTypes.oneOf([PropTypes.bool, Booking]),
  Request: PropTypes.oneOf([PropTypes.bool, Request])
};
export default Types;

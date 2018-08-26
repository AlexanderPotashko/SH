import fetchApi from '../../services/fetch';

export const callBooking = data => fetchApi('booking', 'POST', data);

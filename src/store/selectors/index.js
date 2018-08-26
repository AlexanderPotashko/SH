export const getRequestById = ({ activeId, requests }) =>
  (activeId && requests[activeId]) || false;
export const getBookingById = ({ activeId, list }) =>
  (activeId && list.find(({ id }) => id === activeId)) || false;

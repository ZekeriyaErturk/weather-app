const NOTIFICATION = 'NOTIFICATION';
const RESET = 'RESET';

export const clearNotification = () => ({ type: RESET });

let clear;
export const setNotification = (message, seconds) => async (dispatch) => {
  await dispatch({ type: NOTIFICATION, data: message });

  if (clear) clearNotification(clear);
  clear = setTimeout(() => {
    dispatch(clearNotification());
  }, seconds * 1000);
};

const reducer = (state = '', action) => {
  switch (action.type) {
    case NOTIFICATION:
      return action.data;
    case RESET:
      return '';
    default:
      return state;
  }
};

export default reducer;

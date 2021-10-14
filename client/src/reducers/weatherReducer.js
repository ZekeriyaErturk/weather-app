import { getCityWeather } from '../services/weatherService';
import { setNotification } from './notificationReducer';
import { addCache, removeCache } from './cacheReducer';
import { replaceTR } from '../utils';

const ADD_CITY = 'ADD_CITY';
const DELETE_CITY = 'DELETE_CITY';

export const addCity = (name) => async (dispatch) => {
  const res = await getCityWeather(name);
  if (res.status !== 404) {
    dispatch({
      type: ADD_CITY,
      data: res,
    });
    dispatch(addCache({ name: replaceTR(name), seconds: Date.now() }));
  } else {
    dispatch(setNotification('Please Enter a Valid City Name', 3));
  }
};

export const deleteCity = (name) => (dispatch) => {
  dispatch({
    type: DELETE_CITY,
    name,
  });
  dispatch(removeCache(name));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.data];
    case DELETE_CITY:
      const filteredCities = state.filter((c) => {
        return !replaceTR(c.name).includes(replaceTR(action.name));
      });
      return filteredCities;
    default:
      return state;
  }
};

export default reducer;

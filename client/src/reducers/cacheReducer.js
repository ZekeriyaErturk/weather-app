import { replaceTR } from '../utils';

const ADD_CACHE = 'ADD_CACHE';
const REMOVE_CACHE = 'REMOVE_CACHE';

export const addCache = (cacheData) => ({
  type: ADD_CACHE,
  data: cacheData,
});

export const removeCache = (cityName) => ({
  type: REMOVE_CACHE,
  data: cityName,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CACHE:
      return [...state, action.data];
    case REMOVE_CACHE:
      const filtered = state.filter(
        (c) => !replaceTR(c.name).includes(replaceTR(action.data))
      );
      return filtered;
    default:
      return state;
  }
};

export default reducer;

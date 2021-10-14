import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Utilities
import { checkDuplicateCity, replaceTR } from '../utils';

// Reducers
import { addCity, deleteCity } from '../reducers/weatherReducer';
import { filtered } from '../reducers/filterReducer';
import { setNotification } from '../reducers/notificationReducer';

// Component Imports
import SearchCity from './SearchCity';
import CardList from './CardList';
import SearchNRefresh from './SearchNRefresh';

const Home = () => {
  const dispatch = useDispatch();
  let cities = useSelector((state) => state.cities);
  let filter = useSelector((state) => state.filter);
  let cache = useSelector((state) => state.cache);
  const [cityName, setCityName] = useState('');

  if (filter !== null) {
    cities = cities.filter((c) =>
      replaceTR(c.name).includes(replaceTR(filter))
    );
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    if (checkDuplicateCity(cities, cityName) && cityName !== '') {
      handleAdd(cityName);
    } else if (cityName === '') {
      dispatch(setNotification('Please Enter A City', 3));
    } else if (!checkDuplicateCity(cities, cityName)) {
      dispatch(setNotification('City is already listed', 3));
    }
    setCityName('');
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleDelete = (name) => {
    dispatch(deleteCity(replaceTR(name)));
  };

  const handleAdd = (name) => {
    dispatch(addCity(replaceTR(name)));
  };

  const refreshCities = () => {
    cache.forEach((c) => {
      if (Date.now() - c.seconds > 60000) {
        handleDelete(c.name);
        handleAdd(c.name);
      }
    });
  };

  const searchCities = (e) => {
    dispatch(filtered(e.target.value));
  };

  return (
    <div>
      <SearchCity
        addCity={handleAddClick}
        cityName={cityName}
        handleChange={handleChange}
      />
      <SearchNRefresh
        refreshCities={refreshCities}
        searchCities={searchCities}
      />
      <CardList cities={cities} deleteCity={handleDelete} />
    </div>
  );
};

export default Home;

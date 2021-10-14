import React from 'react';
import { getTime } from '../utils';
import Card from './Card';

const CardList = ({ cities, deleteCity }) => {
  return (
    <div className="container mt-3">
      <div className="row g-4">
        {cities.length >= 0 &&
          cities.map((city) => {
            const name = city.name;
            const country = city.sys.country;
            const weather = city.weather[0].description;
            const temp = city.main.temp;
            const iconUrl = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
            const time = getTime(city.dt);

            return (
              <Card
                key={city.id}
                name={name}
                country={country}
                weather={weather}
                temp={temp}
                iconUrl={iconUrl}
                deleteCity={deleteCity}
                time={time}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;

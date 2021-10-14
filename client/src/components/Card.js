import React from 'react';
import '../css/Card.css';

const Card = ({ name, country, weather, temp, iconUrl, deleteCity, time }) => {
  return (
    <div className="col-md-4">
      <div className="p-3 shadow-lg card-bg border border-primary rounded">
        <div className="row">
          <div className="col-8 align-middle">
            <small>{`${name},${country.toUpperCase()}`}</small>
          </div>
          <div className="col-4">
            <img className="float-end" alt="weather icon" src={iconUrl}></img>
          </div>
        </div>
        <div className="row text-center">
          <small>{weather}</small>
          <h1 className="display-1">{temp.toFixed(0)}&#8451;</h1>
        </div>
        <div className="row">
          <div className="col-2">
            <small className="d-inline">{time}</small>
          </div>
          <div className="col-6"></div>
          <div className="col-4">
            <button
              onClick={() => deleteCity(name)}
              className="text-danger float-end btn btn-link btn-sm"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';

const SearchCity = ({ addCity, cityName, handleChange }) => {
  return (
    <div className="row">
      <form onSubmit={addCity}>
        <div className="input-group mb-3">
          <input
            value={cityName}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Add new City"
          />
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-plus"></i> Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCity;

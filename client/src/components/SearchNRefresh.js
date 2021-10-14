import React from 'react';

const SearchNRefresh = (props) => (
  <div className="row mt-2">
    <div className="col-md-4 mb-2">
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={props.refreshCities}
      >
        <i className="fas fa-sync"></i> Refresh
      </button>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-6">
      <div className="input-group mb-3 display-inline">
        <span
          className="input-group-text bg-primary text-white"
          id="basic-addon1"
        >
          <i className="fas fa-search"></i>
        </span>
        <input
          onChange={props.searchCities}
          type="text"
          className="form-control"
          placeholder="fulltext search by name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
);

export default SearchNRefresh;

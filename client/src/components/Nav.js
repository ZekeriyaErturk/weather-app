import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="my-4 w-100 text-center">
      <Link className="btn btn-link" to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link className="btn btn-link" to="/about">
        About
      </Link>
    </div>
  );
};

export default Nav;

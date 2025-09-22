import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#6c757d' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white">Homa Page</a>
        <form className="d-flex" role="search">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;


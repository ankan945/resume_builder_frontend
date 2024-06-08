import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    

const [isNavCollapsed, setIsNavCollapsed] = useState(true);

const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#46146f' }}>
      <div className="container-fluid">
        <Link className="navbar-brand custom-brand fs-1 fst-italic mx-3" style={{ color: 'yellow' }} to="/">Empire_Resume</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link fs-5 fw-bold mx-3`} aria-current="page"  style={{ color: 'white' }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 fw-bold mx-3 `} aria-current="page"   style={{ color: 'white' }} to="/about">About</Link>
            </li>
           
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


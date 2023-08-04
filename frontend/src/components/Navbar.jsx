import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div style={{display: 'flex',
         justifyContent: "space-around",
          boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
           height:"50px",
           textAlign:"center",}}>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/login">Login</Link></div>
          <div><Link to="/signup">Sign Up</Link></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

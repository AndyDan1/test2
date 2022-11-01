import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link data-testid={'main-link'} to={'/'} style={{margin: '20px'}}>main</Link>
      <Link data-testid={'about-link'} to={'about'} style={{margin: '20px'}}>about</Link>
      <Link data-testid={'users-link'} to={'users'} style={{margin: '20px'}}>users</Link>
    </div>
  );
};

export default NavBar;
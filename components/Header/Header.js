import React from 'react';
import { Link } from 'react-router-dom';
import icon from './mongodb-icon.png';
import './Header.styles.scss';

const Header = () => (
  <div className = 'container'>
    <div className='title'>
      <Link to='/'><div className='option'><img src={icon} alt=''/><span>atlas search</span></div></Link>
    </div>
    <div className='options'>
      <Link to='/about'><div className='option'><i className="fas fa-question"></i><span>about</span></div></Link>
      <Link to='/build-team'><div className='option'><i className="fas fa-users"></i><span>build</span></div></Link>
      <Link to='/login'><div className='option'><i className="fas fa-user"></i><span>login</span></div></Link>
    </div>
  </div>
);

export default Header;
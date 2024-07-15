import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
import './css/Header.css';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    	<Logo />
    	<SearchBar />
     	<Nav />  
    </header>
  );
}

export default Header;

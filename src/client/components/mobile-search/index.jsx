import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import './mobile-search.css';

function MobileSearch({ setShowSearchOptions }) {

  return (
    <div className='mobile-search-container' onClick={() => setShowSearchOptions(true)}>
      <div className='mobile-search'>
        <span>Search Location</span>
        <span>June 03 {'\u2022'} 3 guests</span>
      </div>
      <span className='mobile-search-icon-container'><SearchIcon /></span>
    </div>
  );
}

export default MobileSearch;
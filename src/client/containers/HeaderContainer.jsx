import React, { Component } from 'react'
import './headercontainer.css'
import LogoContainer from './LogoContainer';
import NavBar from './NavBar';
import HeaderButtons from './HeaderButtons';

export class HeaderContainer extends Component {
  render() {
    return (
      <div className='header-container'>
        <LogoContainer footer={false}></LogoContainer>
        <NavBar></NavBar>
        <div className="button-container ">
          <HeaderButtons name="Sign Up"></HeaderButtons>
          <HeaderButtons name="Book Now"></HeaderButtons>
        </div>
      </div>
    )
  }
}

export default HeaderContainer;
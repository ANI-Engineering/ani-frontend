import React from 'react'
import './headercontainer.css'
import LogoContainer from './LogoContainer';
import NavBar from './NavBar';
import HeaderButtons from './HeaderButtons';
import useMediaQuery from '../hooks/useMediaQuery';

function HeaderContainer() {
    const isMobile = useMediaQuery(640)

    return (
      <div className='header-container'>
        <LogoContainer footer={false}></LogoContainer>
        {(!isMobile) && (
          <>
            <NavBar />
            <div className="button-container ">
              <HeaderButtons name="Sign Up"></HeaderButtons>
              <HeaderButtons name="Book Now"></HeaderButtons>
            </div>
          </>
        )}
      </div>
    )
}

export default HeaderContainer;
import './App.css';
import LandingContainer from './client/containers/LandingContainer';
import HeaderContainer from './client/containers/HeaderContainer'
import FooterContainer from './client/containers/footer/FooterContainer'
import HeaderButtons from './client/containers/HeaderButtons';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';
import LoginContainer from './client/containers/loginContainer/loginContainer';


function App() {
    const currentState = useSelector(state => state.currentState);
    return (
      <BrowserRouter >
        <div className="App">
          <>
            <HeaderContainer />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<LandingContainer />} />
                <Route path="/gallery" element={<h1>Gallery</h1>} />
              </Routes>
            </main>
            <FooterContainer />
            <div className='sticky-button chat-button'>
              <HeaderButtons name='Chat With Us' icon='whatsapp'></HeaderButtons>
            </div>
          </>
          {currentState ? <LoginContainer /> : <></>}
        </div>

      </BrowserRouter>
    );
}

export default App;

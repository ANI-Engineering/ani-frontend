import './App.css';
import LandingContainer from './client/containers/LandingContainer';
import HeaderContainer from './client/containers/HeaderContainer'
import FooterContainer from './client/containers/footer/FooterContainer'
import HeaderButtons from './client/containers/HeaderButtons';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggle } from './client/reduxContainer/actions/loginActions'
import LoginForm from './client/components/Login/LoginForm';
import LogoContainer from './client/containers/LogoContainer';
import LoginContainer from './client/containers/loginContainer/loginContainer';


export class App extends Component {
  render() {
    const { currentState, toggle } = this.props;
    return (
      <BrowserRouter >
        <div className="App">
          <>
            <HeaderContainer></HeaderContainer>
            <Routes>
              <Route path="/" element={<LandingContainer></LandingContainer>} />
              <Route path="/gallery" element={<h1>Gallery</h1>} />
            </Routes>
            <FooterContainer></FooterContainer>
            <div className='sticky-button chat-button'>
              <HeaderButtons name='Chat With Us' icon='whatsapp'></HeaderButtons>
            </div>
          </>
          {currentState ? <LoginContainer></LoginContainer> : <></>}
        </div>

      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentState: state.currentState
  }
};

const mapDispatchToProps = {
  toggle
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

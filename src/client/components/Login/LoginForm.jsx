import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggle } from '../../reduxContainer/actions/loginActions'
import './login.css'
import HeaderButtons from '../../containers/HeaderButtons';
import { ReactComponent as LoginLogo } from '../../assets/icons/login-logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/icons/google_symbol.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook_symbol.svg';
import { ReactComponent as MailLogo } from '../../assets/icons/mail_icon.svg';
import { ReactComponent as CrossLogo } from '../../assets/icons/cross-btn.svg';


export class LoginForm extends Component {

    render() {
        const { currentState, toggle } = (this.props);
        return (
            <div className='login-container' onClick={toggle}>
                {/* <div>
                    <h2>Image </h2>
                </div> */}
                <div className='login-info'>
                    <div className='close-button'>
                        <CrossLogo onClick={toggle}></CrossLogo>
                    </div>
                    <div className='login-logo'><LoginLogo></LoginLogo></div>
                    <div className='display-text'>Login or Sign up</div>
                    <div className='input'>
                        <input className='email-input' type='email' placeholder='Enter Email'></input>
                    </div>
                    <div className='continue-button'>
                        <HeaderButtons name='Continue'></HeaderButtons>
                    </div>
                    <div className='or'>or</div>
                    <div className='sso-panel'>
                        <GoogleLogo></GoogleLogo>
                        <FacebookLogo></FacebookLogo>
                        <MailLogo></MailLogo>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

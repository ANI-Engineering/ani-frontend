import React, { Component } from 'react'
import LoginForm from '../../components/Login/LoginForm'
import '../../components/Login/login.css'
import { connect } from 'react-redux';
import { toggle } from '../../reduxContainer/actions/loginActions'


export class LoginContainer extends Component {
    render() {
        const { currentState, toggle } = (this.props);
        return (
            <div className='login-wrapper' onClick={toggle}>
                <LoginForm></LoginForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

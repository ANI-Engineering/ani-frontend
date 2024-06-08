import React, { Component } from 'react'
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg'
import { connect } from 'react-redux';
import { toggle } from '../reduxContainer/actions/loginActions'
export class HeaderButtons extends Component {
    render() {
        const { currentState, toggle } = this.props;

        if (this.props.icon == 'whatsapp') {
            debugger;
            return (
                <div className="button button-red" >
                    <WhatsAppIcon className='chat-icon'></WhatsAppIcon>
                    <a href='https://wa.me/8431384096' target="_blank" style={{ color: '#FFF' }}>{this.props.name}</a>
                </div >
            )
        } else {
            if (this.props.name == 'Sign Up') {
                return (
                    <div className="button button-white" onClick={toggle}>
                        <a>{this.props.name}</a>
                    </div >
                )
            }
            return (
                <div className="button button-red" >
                    <a>{this.props.name}</a>
                </div >
            )
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);
import React, { Component } from 'react'
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as LogoDark } from '../assets/icons/logo_dark.svg';

import './headercontainer.css'

export default class LogoContainer extends Component {
    render() {
        return (
            <div className='logo-container'>
                {this.props.footer ?
                    <>
                        <LogoDark />
                        <div className='name-container'>
                            <div className='name-container ani-name ani-dark'>ANI</div>
                            <div className='name-container living-space ani-dark'>Living Spaces</div>
                        </div>
                    </>
                    :
                    <>
                        <Logo />
                        <div className='name-container'>
                            <div className='name-container ani-name'>ANI</div>
                            <div className='name-container living-space'>Living Spaces</div>
                        </div>
                    </>
                }
            </div>
        )
    }
}

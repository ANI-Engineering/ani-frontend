import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import BodyContainer from './landingpagebody/BodyContainer';

export default class NavBar extends Component {
    render() {
        return (
            <div className='header'>
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/gallery">Gallery</Link></a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        )
    }
}

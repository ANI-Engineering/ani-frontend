import React, { Component } from 'react'
import './bodycontainer.css'
import SearchBar from './searchbar/SearchBar'

export default class BodyContainer extends Component {
    render() {
        return (
            <div className="landing-page-body">
                <h1>Stay in Comfort, Stay with Us!</h1>
                <p>Book  your  urban  retreat  today:modern,  convenient  service  apartments <br></br>designed  for  your  comfort  and  convenience.</p>
                <SearchBar></SearchBar>
            </div>
        )
    }
}

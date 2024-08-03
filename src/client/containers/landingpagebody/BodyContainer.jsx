import React from 'react'
import './bodycontainer.css'
import SearchBar from './searchbar/SearchBar'
import useMediaQuery from '../../hooks/useMediaQuery'

function BodyContainer() {
    const isMobile = useMediaQuery(640)
    return (
        <div className="landing-page-body">
            <h1>Stay in Comfort, Stay with Us!</h1>
            <p>Book  your  urban  retreat  today: modern, convenient  service  apartments designed  for your  comfort  and  convenience.</p>
            {(!isMobile) && <SearchBar />}
        </div>
    )
}

export default BodyContainer
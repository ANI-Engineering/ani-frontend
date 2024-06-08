import React, { Component } from 'react'
import { ReactComponent as LocationPin } from '../../../assets/icons/location-pin2.svg'
import { ReactComponent as CalenderIcon } from '../../../assets/icons/calender.svg'
import { ReactComponent as GuestIcon } from '../../../assets/icons/guest.svg'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg'
import './searchbar.css'
import HeaderButtons from '../../HeaderButtons'

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <div className='search-bar-container search-bar-landing'>
                    <div className='search-bar-input-container location'>
                        <span><LocationPin></LocationPin></span>
                        <input className='search-bar-input' type='search' placeholder='Search Location'></input>
                    </div>
                    <div className='search-bar-input-container date'>
                        <span><CalenderIcon></CalenderIcon></span>
                        <input className='search-bar-input' type='text' placeholder='Check In'></input>
                    </div>
                    <div className='search-bar-input-container date'>
                        <span><CalenderIcon></CalenderIcon></span>
                        <input className='search-bar-input' type='text' placeholder='Check Out'></input>
                    </div>
                    <div className='search-bar-input-container guest'>
                        <span><GuestIcon></GuestIcon></span>
                        <input className='search-bar-input' placeholder='Guest'></input>
                    </div>
                    <div className='search-bar-input-container search-button'>
                        <span className='search-icon'><SearchIcon></SearchIcon></span>
                        <a>Search</a>
                    </div>
                </div>
            </form>
        )
    }
}

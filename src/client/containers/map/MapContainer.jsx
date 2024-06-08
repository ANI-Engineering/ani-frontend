import React, { Component } from 'react'
import './map.css'

export default class MapContainer extends Component {
    render() {
        return (
            <div className='map-container'>
                <div className='map-wrapper'>
                    <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1Eh5UbfCjSPVyQXwkWWMTM9LBUkd1FSQ&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
                </div>
            </div>
        )
    }
}

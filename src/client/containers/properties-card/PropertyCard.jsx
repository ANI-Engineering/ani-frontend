import React, { Component } from 'react'
import './propertycard.css'
import { ReactComponent as StarRating } from '../../assets/icons/star-rating.svg'

export default class PropertyCard extends Component {
    render() {
        return (
            <div className='property-container'>
                <div className='property-image'>
                    <img alt='' src={this.props.imageUrl}></img>
                </div>
                <div className='property-name'>
                    <p>{this.props.propertyName}</p>
                </div>
                <div className='property-type'>
                    <p>{this.props.propertyType + " | " + this.props.propertyLocation + " | " + this.props.propertyRatings}</p>
                    <div className='star-rating'><StarRating></StarRating></div>
                </div>
                <div className='property-price'>
                    <p>{this.props.propertyPrice}</p>
                </div>
            </div>
        )
    }
}

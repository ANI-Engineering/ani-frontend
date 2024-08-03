import React from 'react'
import { ReactComponent as StarRating } from '../../assets/icons/star-rating.svg'

function PropertyCard(props) {
  const { imageUrl, propertyName, propertyType, propertyLocation, propertyRatings, propertyPrice } = props;
    return (
        <div className='property-card-container'>
          <img alt='' src={imageUrl} width="100%" />
          <div className="property-details-container">
            <div className="property-details left">
              <p className="property-card-name">{propertyName}</p>
              <p className="property-card-type">{propertyType + " | " + propertyLocation}</p>
            </div>
            <div className="property-details right">
              <div className='star-rating'>{propertyRatings}<StarRating></StarRating></div>
              <p className='property-price'>{propertyPrice}</p>
            </div>
          </div>
        </div>
    )
}

export default PropertyCard
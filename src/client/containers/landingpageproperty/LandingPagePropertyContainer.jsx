import React, { Component } from 'react'
import HeaderButtons from '../HeaderButtons'
import './landingpageproperty.css'
import PropertyCard from '../properties-card/PropertyCard'
export default class LandingPagePropertyContainer extends Component {
    render() {
        return (
            <div className='property-block-container'>
                <h2>Our Popular Properties</h2>
                <div className='property-block'>
                    <PropertyCard imageUrl='/images/1.png' propertyName='Nobel Residency' propertyType='1RK' propertyLocation='Akshaynagar' propertyRatings='4.9' propertyPrice='₹ 1400.00/ day'></PropertyCard>
                    <PropertyCard imageUrl='/images/2.png' propertyName='BTM Residency' propertyType='1RK' propertyLocation='Akshaynagar' propertyRatings='4.9' propertyPrice='₹ 1400.00/ day'></PropertyCard>
                    <PropertyCard imageUrl='/images/3.png' propertyName='Yelahanka Circle  Residency' propertyType='1RK' propertyLocation='Akshaynagar' propertyRatings='4.9' propertyPrice='₹ 1400.00/ day'></PropertyCard>
                </div>
                <div className='button-wrapper'>
                    <div className="button-container-property">
                        <HeaderButtons name='See all properties'></HeaderButtons>
                    </div>
                </div>


            </div>
        )
    }
}

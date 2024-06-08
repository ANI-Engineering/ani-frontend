import React, { Component } from 'react'
import './landingcontainer.css';
import '../styles/landing-page/landing-page.css'
import BodyContainer from './landingpagebody/BodyContainer';
import MapContainer from './map/MapContainer';
import LandingPagePropertyContainer from './landingpageproperty/LandingPagePropertyContainer';
import ReviewBox from '../components/review-component/review-box';
import { ReactComponent as StunningInterior } from '../assets/icons/stunning-interior.svg'
import { ReactComponent as AllRoundUtil } from '../assets/icons/all-round-utilities.svg'
import { ReactComponent as RichCulture } from '../assets/icons/rich-culture.svg'
import ArtBox from '../components/review-component/art-box';
import HeaderButtons from './HeaderButtons';
import { ReactComponent as ProfilePic } from '../assets/icons/profile-pic.svg'

export default class LandingContainer extends Component {
    render() {
        const artBoxDesc = "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.";
        const stunningInterior = "Stunning Interior";
        const allRoundUtil = "All round Utilities";
        const richCulture = "Rich Culture";

        return (
            <div className="landing-container">
                <BodyContainer></BodyContainer>
                <LandingPagePropertyContainer></LandingPagePropertyContainer>

                <div className='review-wrapper'>
                    <h2>What our Customers Say</h2>
                    <p className='review-wrapper-text1'>Listen to what our customers say about their amazing journey with ANI Living Spaces and how we gave<br /> great experiences for them.</p>
                    <div className='customers-reviews-wrapper'>
                        <div className='review-block'>
                            <ReviewBox ProfilePic={ProfilePic} profileName='John Carter' purpose='Business Trip'></ReviewBox>
                        </div>
                        <div className='review-block'>
                            <ReviewBox ProfilePic={ProfilePic} profileName='John Carter' purpose='Business Trip'></ReviewBox>
                        </div>
                        <div className='review-block'>
                            <ReviewBox ProfilePic={ProfilePic} profileName='John Carter' purpose='Business Trip'></ReviewBox>
                        </div>
                    </div>
                    <div>
                        <h2>Why Us?</h2>
                    </div>
                    <div>
                        <p className='review-wrapper-text1'>Listen to what our customers say about their amazing journey with ANI Living Spaces and how we gave<br /> great experiences for them.</p>
                    </div>
                    <div className='art-box-wrapper'>
                        <div><ArtBox ArtImage={StunningInterior} title={stunningInterior} desc={artBoxDesc}></ArtBox></div>
                        <div><ArtBox ArtImage={AllRoundUtil} title={allRoundUtil} desc={artBoxDesc}></ArtBox></div>
                        <div><ArtBox ArtImage={RichCulture} title={richCulture} desc={artBoxDesc}></ArtBox></div>
                    </div>
                    <div>
                        <h2>Visit our Properties</h2>
                    </div>
                    <div className='get-locations-button'>
                        <HeaderButtons name='Get Locations'></HeaderButtons>
                    </div>
                </div>

                <MapContainer></MapContainer>
            </div>
        )
    }
}

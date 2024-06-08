import React, { Component } from 'react'
import '../../styles/review/review.css'
import { ReactComponent as Quotes } from '../../assets/icons/quotes.svg'
export default class ReviewBox extends Component {
    render() {
        const { ProfilePic, profileName, purpose } = this.props;
        return (
            <div className='review-box'>
                <div className="review-quotes"><Quotes className='quotes'></Quotes></div>
                <div className='review-text-wrapper'>
                    <p className='review-text'>Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                </div>
                <div className='review-image-name'>
                    <div><ProfilePic /></div>
                    <div className='profile-name-purpose'>
                        <div className='profile-name'>{profileName}</div>
                        <div className='profile-purpose'>{purpose}</div>
                    </div>
                </div>
            </div>
        )
    }
}

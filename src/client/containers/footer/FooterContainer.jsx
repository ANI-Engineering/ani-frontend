import React from 'react'
import './footer.css'
import LogoContainer from '../LogoContainer'
import {
    LocationIcon,
    PhoneIcon,
    InstagramIcon,
    FacebookIcon,
    XIcon,
    LinkedInIcon
} from '../../assets/icons'

function FooterContainer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <LogoContainer footer />
                    </div>
                    <div className="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Properties</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>

                    </div>
                    <div className="footer-col">
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href="#">
                                <span><LocationIcon></LocationIcon></span>
                                224, 2, 1st Cross Road, Nobel Residency, Phase 2, Tejaswini Nagar, <br></br>Bengaluru, Karnataka 56007
                            </a></li>
                            <li><a href="#">
                                <span><PhoneIcon></PhoneIcon></span>
                                91 7022765665
                            </a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Social Media</h4>
                        <div className='social-media-container'>
                            <a href='#'><InstagramIcon></InstagramIcon></a>
                            <a href='#'><FacebookIcon></FacebookIcon></a>
                            <a href='#'><XIcon></XIcon></a>
                            <a href='#'><LinkedInIcon></LinkedInIcon></a>
                        </div>
                    </div>
                </div>
                <div className='row line'></div>
                <div className="row bottom">
                    <div>Copyright © 2024 ANI Living Spaces | All Rights Reserved</div>
                    <div>Terms and Conditions|Privacy Policy</div>
                </div>
            </div>
        </footer>
    )
}

export default FooterContainer
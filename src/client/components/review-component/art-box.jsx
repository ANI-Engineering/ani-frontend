import React, { Component } from 'react'
import '../../styles/review/art-box.css'

export default class ArtBox extends Component {
    render() {
        const { ArtImage, title, desc } = this.props;
        return (
            <div className='art-box'>
                <div><ArtImage></ArtImage></div>
                <div className='art-box-title'>{title}</div>
                <div className='art-box-desc'>{desc}</div>
            </div>
        )
    }
}

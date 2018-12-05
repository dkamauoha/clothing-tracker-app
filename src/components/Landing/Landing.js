import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

//Styles
import './Landing.css';

//Images
import tshirts from '../../images/tshirts.jpg';

class Landing extends Component {
    state = {

    };

    render () {
        return (
            <div className='landing__display-container'>
                <Parallax
                  bgImage={tshirts}
                  strength={500}
                //   bgHeight='auto'
                //   bgImageAlt=''  
                >
                    <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3 className='landing__title'>Welcome to Clothing Tracker</h3>
                        <Link to='/login'><button className='landing__login-button'>Sign Up / Log In</button></Link>
                    </div>
                </Parallax>
                <div className='landing__features-container'>
                    <div>Keep Track of Your Favorite Clothing</div>
                    <div className='landing__feature-spacer'></div>
                    <div>Upload Photos of Your Clothing</div>
                    <div className='landing__feature-spacer'></div>
                    <div>Third feature coming soon!</div>
                </div>
                {/* <img src={tshirts} alt=''/> */}
            </div>
        )
    }
}

export default Landing;
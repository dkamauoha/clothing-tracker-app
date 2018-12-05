import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import { updateUser, logout } from '../../../ducks/reducer';

import DrawerToggleButton from '../SideDrawer/DrawerToggle';

import './Toolbar.css';

class Toolbar extends Component  {
    constructor () {
        super();
        this.state = {
            user: {}
        }
    }

    // componentDidMount() {
    //     axios.get('/api/user').then(res => {
    //         // console.log(res.data); 
    //         this.props.updateUser({user: res.data});
    //     })
    // }

    // componentDidUpdate = (prevProps) => {
    //     if (this.props.user !== prevProps.user) {
    //         this.setState({user: this.props.user})
    //     }
    // } 

    // login () {
    //     let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    //     let url = `${window.location.origin}/auth/callback`;
    //     window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    // };


    // logout () {
    //     axios.get('/api/logout')
    //         .then(() => {
    //             this.props.logout();
    //             console.log('Successfully logged out');
    //         });
    // }


    render () {
        // console.log(this.state.user);
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <Link to='/' className="toolbar__logo"><div >Clothing-Tracker</div></Link>
                    <div className='spacer'></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <h2>Awaiting Links</h2>
                        </ul>
                    </div>
                    <div className='toolbar__login'>
                        <Link to='/' className='toolbar__login-text'><div onClick={() => this.login()}>Login</div></Link>
                        <img src={this.state.user.profile_pic} alt=''
                            className='iStyle'
                            // onClick={() => this.logout()}
                            />
                    </div>
                </nav>
            </header>
        )
    }
    
};

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }

export default Toolbar;
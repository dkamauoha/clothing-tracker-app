import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Navbar
import Toolbar from '../Navbar/Toolbar/Toolbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import Backdrop from '../Navbar/Backdrop/Backdrop';

//Style
import './Dashboard.css';

class Dashboard extends Component {
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      });
    };

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className='dashboard__display-container'>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <main className='dashboard__main-container'>
                    <div className='dashboard__info-box-1-container'>
                        <div className='dashboard__info-box-1'>
                            <div className='dashboard__info-box-1-header'>InfoBox1</div>
                        </div>
                    </div>
                    <div className='dashboard__add-new-item'>
                        <Link to='/additem' className='dashboard__link-text'>
                            <div className='dashboard__add-new-item-button'>
                                Add New Item
                            </div>
                        </Link>
                    </div>
                    <div className='dashboard__info-box-3-container'>
                        <div>InfoBox3</div>
                    </div>
                </main>

            </div>
        )
    }
}

export default Dashboard;
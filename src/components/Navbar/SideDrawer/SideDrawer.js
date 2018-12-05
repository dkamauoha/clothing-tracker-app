import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './SideDrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <div className='side-drawer__spacer'></div>
                <Link to='/' className='side-drawer__links'><li>NONE YET</li></Link>
                <Link to='/' className='side-drawer__links'><li>NONE YET</li></Link>
                <Link to='/' className='side-drawer__links'><li>NONE YET</li></Link>
                <Link to='/' className='side-drawer__links'><li>NONE YET</li></Link>
                <Link to='/' className='side-drawer__links'><li>NONE YET</li></Link>
                {/* <Link to='/about' className='side-drawer__links'><li>ABOUT</li></Link> */}
            </ul>
        </nav>
    )
}

export default withRouter(SideDrawer);
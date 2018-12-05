import React, { Component } from 'react';

// import Toolbar from './components/Navbar/Toolbar/Toolbar';
// import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
// import Backdrop from './components/Navbar/Backdrop/Backdrop';

//CSS
import './reset.css';
import './App.css';

//Routes
import routes from './routes';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    return (
      <div className="App">
        <main>
          <div>
            {routes}
          </div>
        </main>
      </div>
    );
  }
}

export default App;

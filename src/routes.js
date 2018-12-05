import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import AddItem from './components/AddItem/AddItem';

const routes = (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/additem' component={AddItem}/>
    </Switch>
)

export default routes;
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Locations, HeaderUser } from './'
export { default as Locations } from './Locations';
export { default as HeaderUser } from './HeaderUser'



function User() {
    return (
        <>
        <HeaderUser />
            <Router> 
                <Switch>
                    <Route path="/user">
                        <Locations />
                    </Route>
                </Switch>       
            </Router>
        </>
    );
}

export default User;
import React from "react";
import Footer from '../Home/Footer';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { HeaderUser, Main } from './';
export { default as HeaderUser } from './HeaderUser';
export { default as Main } from './Main';



function User() {
    return (
        <>
         <HeaderUser />
        
         <Main />
         
         <Footer />
        </>
    );
}

export default User;
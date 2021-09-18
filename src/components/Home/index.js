import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Header, Primary, Contacts, Service, SignIn, Footer } from './'
export { default as Header } from './Header';
export { default as Primary } from './Primary';
export { default as Contacts } from './Contacts';
export { default as Service } from './Service';
export { default as SignIn } from './SignIn';
export { default as Footer } from './Footer';



function Home() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/contact-us" exact>
                        <Contacts />
                    </Route>
                    <Route path="/service" exact>
                        <Service />
                    </Route>
                    <Route path="/sign-in" exact>
                        <SignIn />
                    </Route>
                    <Route path="/" exact>
                        <Primary />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default Home;

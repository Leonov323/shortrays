import React, { FC } from 'react'
import { Header, Footer } from '../UI'
import { HomeWrapperStyled } from './styled'
import Primary from './Primary'
import Service from './Service'
import Contacts from './Contacts'
import Login from './Login'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { headerData } from './headerData'

const Home: FC = () => {
  return (
    <Router>
      <Header {...headerData} />
      <HomeWrapperStyled>
        <Switch>
          <Route exact path="/">
            <Primary />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact-us">
            <Contacts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </HomeWrapperStyled>
      <Footer />
    </Router>
  )
}

export default Home

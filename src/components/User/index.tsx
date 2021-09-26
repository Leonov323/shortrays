import React, { FC } from 'react'
import { Header, Footer } from '../UI'
import { UserWrapperStyled } from './styled'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Logout from './Logout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { headerData } from './headerData'

const User: FC = () => {
  return (
    <Router>
      <Header {...headerData} />
      <UserWrapperStyled>
        <Switch>
          <Route exact path="/user">
            <Dashboard />
          </Route>
          <Route path="/user/profile">
            <Profile />
          </Route>
          <Route path="/user/logout">
            <Logout />
          </Route>
        </Switch>
      </UserWrapperStyled>
      <Footer />
    </Router>
  )
}

export default User

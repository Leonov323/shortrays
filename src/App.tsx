import React, { FC } from 'react'
import { GlobalStyles } from './Global'
import Home from './components/Home'
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App: FC = () => {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

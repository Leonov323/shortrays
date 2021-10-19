import React from 'react'
import { GlobalStyles } from './Global'
import { Home } from './components/Home'
import { User } from './components/User'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
 
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>

          <Route path="/user/:id" component={User} />

          <Route path="/" component={Home} />   

        </Switch>
      </Router>
    </>
  )

}

export default App

import React from 'react'
import { Route } from 'react-router-dom'
import { Header, Footer } from '../UI'
import { HomeStyled } from './HomeStyled'
import { Primary } from './Primary'
import { Service } from './Service'
import { Contacts } from './Contacts'
import { Login } from './Login'
import { headerData } from '../../common/headerData/headerDataHome'
import { RedirectService } from '../../common/services/rest/redirectService'


export const Home = () => {

  return (

    <>

      <Header {...headerData} />

      <HomeStyled>

        <Route exact path="/" component={Primary} />

        <Route path="/service" component={Service} />

        <Route path="/contact-us" component={Contacts} />

        <Route path="/login" component={Login} />

        <Route path="/redirect" component={RedirectService} />

      </HomeStyled>

      <Footer />

    </>
    
  )

}


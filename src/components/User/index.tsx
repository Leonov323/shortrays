import React from 'react'
import { Route } from 'react-router-dom'
import { Header, Footer } from '../UI'
import { UserStyled } from './UserStyled'
import { Dashboard } from './Dashboard'
import { Profile } from './Profile'
import { checkAuthUser } from '../../common/services/common/checkAuth'
import { GetUser } from '../../common/services/rest/getUser'
import { headerData } from '../../common/headerData/headerDataUser'


export const User = () => {

  checkAuthUser()

  GetUser()

  return (
    <>

      <Header {...headerData()} />

      <UserStyled>

        <Route path="/user/:id/dashboard" component={Dashboard} />

        <Route path="/user/:id/profile" component={Profile} />

      </UserStyled>

      <Footer />

    </>
  )
}


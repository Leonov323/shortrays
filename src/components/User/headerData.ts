import { HeaderProps } from "../UI/Header/types"



export const headerData: HeaderProps = {
  nav: {
    links: [
      {
        link: '/shortrays/user',
        text: 'DASHBOARD'
      },
      {
        link: '/shortrays/user/profile',
        text: 'PROFILE'
      },
      {
        link: `/shortrays/user/logout`,
        text: 'LOGOUT'
      },
    ]
  },
  logoLink: {
    logoLink: '/shortrays/user'
  }
}
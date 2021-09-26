import { HeaderProps } from "../UI/Header/types"



export const headerData: HeaderProps = {
  nav: {
    links: [
      {
        link: '/user',
        text: 'DASHBOARD'
      },
      {
        link: '/user/profile',
        text: 'PROFILE'
      },
      {
        link: `/user/logout`,
        text: 'LOGOUT'
      },
    ]
  },
  logoLink: {
    logoLink: '/user'
  }
}
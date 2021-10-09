import { HeaderProps } from '../../components/UI/Header/types'

export const headerData: HeaderProps = {
  nav: {
    links: [
      {
        link: '/',
        text: 'HOME',
        exact: true
      },
      {
        link: '/service',
        text: 'SERVICE',
      },
      {
        link: '/contact-us',
        text: 'CONTACT US',
      },
      {
        link: '/login',
        text: 'LOGIN',
      },
    ],
  },
  logoLink: {
    logoLink: '/'
  }
 
}
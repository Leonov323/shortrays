import { HeaderProps } from '../../components/UI/Header/types'
import { useAppSelector } from '../../store/hooks'
import { useHistory } from 'react-router'


export const headerData = () => {

  const userId = useAppSelector((state) => state.user.value)
  const history = useHistory(

  )
  const Logout = () => {
    history.push('/')
    localStorage.removeItem('token')
  }

  const dataList: HeaderProps = {
    nav: {
      links: [
        {
          link: `/user/${userId}/dashboard`,
          text: 'DASHBOARD'
        },
        {
          link: `/user/${userId}/profile`,
          text: 'PROFILE'
        },
        {
          link: '/redirect',
          text: 'LOGOUT',
          onClick: Logout
        },
      ]
    },
    logoLink: {
      logoLink: `/user/${userId}/dashboard`
    }
  }

  return dataList
}
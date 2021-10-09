import { useHistory } from 'react-router-dom'


const token = localStorage.getItem('token')


export const checkAuthUser = () => {
  const history = useHistory()
  if (token === null) {
    history.push('/login')
    location.reload()
  }
} 
 
export const checkAuthLogin = () => {
  const history = useHistory()
  if ('token' in localStorage) {
    history.push('/redirect')
    location.reload()
  }
}
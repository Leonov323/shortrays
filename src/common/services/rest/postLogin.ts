import { incorrect, correct } from '../../../store/features/validationLoginSlice'
import { email, password } from '../../../store/features/loginSlice'
import { state, store, api, history } from '../common/importFuncs'


export const PostLogin = () => {

    const email = state.login.email
    const password = state.login.password

    store.dispatch(incorrect())

    api.post('/sign-in', {
        email,
        password,
    })
        .then((data) => {
            console.log(data)
            localStorage.setItem('token', data.data.token)
            history.push('/redirect')
        })
        .then(() => {
            location.reload()
        })
        .catch((error) => {
            console.error(error)
            store.dispatch(correct())
        })

}


export const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(email(e.target.value))
}

export const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(password(e.target.value))
}
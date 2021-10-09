import { email, password, RepeatPassword } from '../../../store/features/registrationSlice'
import { incorrect, correct } from '../../../store/features/validationLoginSlice'
import { incorrect2, correct2 } from '../../../store/features/validationRegistrationSlice'
import { state, store, api, history } from '../common/importFuncs'


export const PostRegistration = () => {

    const email = state.registration.email
    const password = state.registration.password
    const repeatPassword = state.registration.RepeatPassword

    if (password === repeatPassword) {

        api.post('/sign-up', { email, password })
            .then(res => {
                console.log('PostRegistration Response:', res)
                history.push('/redirect')
                store.dispatch(incorrect())
            })
            .then(() => {
                location.reload()
            })
            .catch(err => {
                console.log(err)
                store.dispatch(correct())
                store.dispatch(incorrect2())
            })

    } else {
        store.dispatch(incorrect())
        store.dispatch(correct2())
    }


}

export const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(email(e.target.value))
}

export const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(password(e.target.value))
}

export const HandleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(RepeatPassword(e.target.value))
}
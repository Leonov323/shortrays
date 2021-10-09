import { api } from '../../apis'
import { useAppDispatch } from '../../../store/hooks'
import { myUserId } from '../../../store/features/userSlice'
import { useEffect } from 'react'


export const GetUser = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {

        api.get('/me')
            .then(res => {
                console.log('GetUser Response:', res.data)
                dispatch(myUserId(res.data.id))
            })
            .catch(err => {
                console.log('User Error :', err)
            })

    }, [])

}







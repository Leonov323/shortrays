import { increment } from '../../../store/features/counterSlice'
import { locTitle } from '../../../store/features/titlesSlice'
import { state, store, api } from '../common/importFuncs'

export const PostNewLocation = () => {

    const title = state.locTitle.locTitle
    
    
    api.post('/places', {
        title
    })
        .then(res => {
            console.log('PostNewLocation response', res.data)
            store.dispatch(increment())
            store.dispatch(locTitle(''))
        })
        .catch(console.log)
}


export const HandleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(locTitle(e.target.value))
}
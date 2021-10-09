import { increment } from '../../../store/features/counterSlice'
import { tabTitle } from '../../../store/features/titlesSlice'
import { LocationId } from '../common/locationId'
import { state, store, api } from '../common/importFuncs'
 
export const PostNewTable = () => {

    const title = state.tabTitle.tabTitle

    const placeId = LocationId()

    api.post(`/places/${placeId}/codes`, { title })
        .then(res => {
            console.log('PostNewTable response', res.data)
            store.dispatch(increment())
            store.dispatch(tabTitle(''))
        })
        .catch(console.log)
}


export const HandleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(tabTitle(e.target.value))
}


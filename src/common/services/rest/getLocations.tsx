import { api } from '../../apis'
import React, { useEffect } from 'react'
import { MyLocation } from '../../../components/User/Dashboard/LeftNav/MyLocation/index'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { myLocations } from '../../../store/features/locationsSlice'
import { Spinner } from 'react-bootstrap'
import { loadingFalse } from '../../../store/features/loadingSlice'


export const GetLocations = () => {

    const dispatch = useAppDispatch()
    const titles = useAppSelector((state) => state.locations.value)
    const loading = useAppSelector((state) => state.loading.value)
    const counter = useAppSelector((state) => state.counter.value)
    
    useEffect(() => {

        api.get('/places')
            .then(res => {
                dispatch(myLocations(res.data.places))
                console.log('GetLocations Response:', res.data.places)
                dispatch(loadingFalse())
            })
            .catch(err => {
                console.log('Locations Error:', err)
            })

    }, [counter])


    const Render = () => {

        if (titles.length > 0) {
            return <>
                {titles.map(({ title, id }, index) => {
                    return <MyLocation title={title} id={id} placeId={id} key={index} />
                })}
            </>
        } else if (loading) {
            return <div className="text-center mt-5"><Spinner animation="border" /></div>
        } else {
            return <p className="text-center mt-5">No locations</p>
        } 

    }

    return (
        <Render />
    )

}
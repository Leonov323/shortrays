import React from 'react'
import { LocationsStyled } from './LocationsStyled'
import { PostNewLocation } from '../../../../../common/services/rest/postNewLocation'
import { HandleTitle } from '../../../../../common/services/rest/postNewLocation'
import { useAppSelector } from '../../../../../store/hooks'

export const Locations = () => {

    const title = useAppSelector( (state) => state.locTitle.locTitle )

    return (
        <LocationsStyled className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
            Create New Location
            <label>Name</label>
            <input onChange={HandleTitle} value={title}/> 
            <button type="submit" onClick={PostNewLocation}>create</button>
        </LocationsStyled>
    )

}
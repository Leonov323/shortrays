import React from 'react'
import { TablesStyled } from './TablesStyled'
import { HandleTitle } from '../../../../../common/services/rest/postNewTable'
import { PostNewTable } from '../../../../../common/services/rest/postNewTable'
import { useAppSelector } from '../../../../../store/hooks'


export const Tables = () => {

    const title = useAppSelector( (state) => state.tabTitle.tabTitle )

    return (
        <TablesStyled className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
            Create New Table
            <label>Name</label>
            <input onChange={HandleTitle} value={title} />
            <button onClick={PostNewTable}>create</button>
        </TablesStyled>
    )
}
import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import TablesList from './TablesList'
import WaiterList from './WaiterList'

type MyLocationProps = {
    title?: string
    id?: string
    placeId?: [] | string
}

export const MyLocation: FC<MyLocationProps> = (props) => {
const match = useRouteMatch()


    return (
        <>
            <Link to={`${match.url}/${props.placeId}`}>
                <Button className="btn-secondary w-100 mt-4" >{props.title}</Button>
            </Link>

            <Link to={`${match.url}/${props.placeId}/tables`}>
                <Button className="btn-secondary w-50 mt-2">Tables</Button>
            </Link>

            <TablesList /> 

            <Link to={`${match.url}/${props.placeId}/waiters`}>
                <Button className="btn-secondary w-50 mt-3">Waiters</Button>
            </Link>

            <WaiterList />
        </>
    )
}

import React, { FC } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Tables } from './Tables'
import { Locations } from './Locations'
import { Waiters } from './Waiters'
import { LocationName } from './LocationName'

type RightPanelProps = {
    locationTitle?: string
}

export const RightPanel: FC<RightPanelProps> = () => {

    const match = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${match.path}/:id`} component={LocationName} />
 
            <Route exact path={`${match.path}/:placeId/tables`} component={Tables} />

            <Route exact path={`${match.path}/table`}>
                <h3>TABLE</h3>
            </Route>

            <Route exact path={`${match.path}/:placeId/waiters`} component={Waiters} />

            <Route exact path={`${match.path}/waiter`}>
                <h3>WAITER</h3>
            </Route>

            <Route exact path={match.path} component={Locations} />
        </Switch >
    )
}
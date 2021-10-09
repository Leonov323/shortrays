import React from 'react'
import { FloatingLabel, Form as BForm } from 'react-bootstrap'
import { Button } from '../../../UI'
import { ErrorMessage } from './styled'
import { useAppSelector } from '../../../../store/hooks'
import { PostLogin, HandleEmail, HandlePassword } from '../../../../common/services/rest/postLogin'


export const Form = () => {

    const valid = useAppSelector((state) => state.validation.value)

    return (

        <BForm className="col-md-4 mx-auto">

            <ErrorMessage valid={valid}>
                Email or password incorrect
            </ErrorMessage>

            <FloatingLabel label="Email address" className="mb-3 border">
                <BForm.Control type="email" onChange={HandleEmail} />
            </FloatingLabel>

            <FloatingLabel label="Password" className="mb-3 border">
                <BForm.Control type="password" onChange={HandlePassword} />
            </FloatingLabel>

            <Button onSubmit={PostLogin} text="ENTER" />

        </BForm>
    )

}

import React, { FC, useState } from 'react'
import { FloatingLabel, Form as BForm, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Form: FC = () => {
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true);
    };

    const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const onLogin = () => { 
        history.push('/user');
        window.location.reload()
}

    return (
        <BForm
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="col-md-4 mx-auto"
        >
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3 border"
            >
                <BForm.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3 border"
            >
                <BForm.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </FloatingLabel>
            <Button onClick={onLogin} className="btn-dark" type="submit">ENTER</Button>
        </BForm>

    )
}

export default Form

import React, { FC } from 'react'
import { Modal, Form, Image } from 'react-bootstrap'
import Logo from '../../../../UI/Header/Logo/logo.png'
import { Button } from '../../../../UI'
import { ErrorMessage, ErrorMessage2 } from './styled'
import { PostRegistration, HandleEmail, HandlePassword, HandleRepeatPassword } from '../../../../../common/services/rest/postRegistration'
import { useAppSelector } from '../../../../../store/hooks'

type Order = {
  show: boolean
  onHide: unknown
}



const MyVerticallyCenteredModal: FC<Order> = (props) => {

  const error400 = useAppSelector((state) => state.validation.value)
  const repeatPasswordValid = useAppSelector((state) => state.validationRegistration.value)

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained">Fill in the form!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-3">
          <ErrorMessage error400={error400}>
            Email is unavailable
          </ErrorMessage>
          <ErrorMessage2 repeatPasswordValid={repeatPasswordValid}>
            Repeat password incorrect
          </ErrorMessage2>
          <Form.Group className="mb-3" controlId="RegistrationEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={HandleEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="RegistrationPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*******"
              onChange={HandlePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="RegistrationRepeatPassword">
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*******"
              onChange={HandleRepeatPassword}
            />
          </Form.Group>
          <Button onSubmit={PostRegistration} text="Click me!" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <small>SHORTRAYS - QR call waiter system</small>
        <Image src={Logo} width="35px" />
      </Modal.Footer>
    </Modal>
  )
}

export default MyVerticallyCenteredModal





//   const history = useHistory()
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')
//   const [rpassword, setRpassword] = useState<string>('') 
//   const [error400, setError400] = useState<boolean>(false)
//   const [repeatPasswordValid, setRepeatPasswordValid] = useState<boolean>(false)
//   function validateEmail(email: unknown) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(email).toLowerCase())
// }
//   const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     event.stopPropagation()
//     setRepeatPasswordValid(false)
//     setError400(false)

//     if (password === rpassword && validateEmail) {
//       axios
//         .post('https://api-shortrays-dev.herokuapp.com/sign-up', {
//           email,
//           password
//         })
//       .then((data) => {
//         console.log(data)
//         // localStorage.setItem('token', data.data.toString())
//         history.push('/login')
//         // window.location.reload()
//       })
//       .catch((error) => {
//         console.error(error)
//         setError400(true)
//       })
//     } else {
//       setRepeatPasswordValid(true)
//       setError400(false)
//     }
//   }
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { app,database } from "database/firebase";
import {getDoc, doc} from 'firebase/firestore'
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAuth } from "features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const auth = getAuth(app)
   const [ user,setUser ] = useState('')
   const [password, setPassword] = useState('')
   const  [uid,setUid] = useState('')
   const navigate = useNavigate()
 
  
  const handleUserState =(e)=>{
     setUser(e.target.value)
  }

  const handlePasswordState=(e)=>{
    setPassword(e.target.value)
  }

  const handleIniciarSesion = async()=>{
    signInWithEmailAndPassword(auth, user, password).then((datos)=>{
      setUid(datos.user.uid)
    }).catch((error)=>{
       dispatch(addAuth(null))
    })
  }

  useEffect(() => {
    if (uid) { // Verificar si uid tiene un valor
      handleGetUserLogin()
    }
  }, [uid]);
 //ANEXAR USE DISPATCH 

  const handleGetUserLogin = async()=>{
     const refDoc = doc(database,'usuarios',uid)
     const data = await getDoc(refDoc) 
     dispatch(addAuth(data.data()))
     navigate("/admin")
  }
 
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-center mt-2 mb-3">
              <h4>Iniciar sesion</h4>
            </div>
            <div className="btn-wrapper text-center">
              
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-4">
            
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    placeholder="Email"
                    type="email"
                    value={user}
                    onChange={handleUserState}
                    autoComplete="new-email"
                  />

                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={handlePasswordState}
                    value={password}
                    autoComplete="Contraseña"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recuerdame</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="default" type="button" onClick={handleIniciarSesion}>
                  Iniciar en fv!
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Olvide mi contraseña?</small>
            </a>
          </Col>
     
        </Row>
      </Col>
    </>
  );
};

export default Login;

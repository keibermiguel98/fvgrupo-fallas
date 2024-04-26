
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import {database, app} from 'database/firebase.js'
import { setDoc,collection, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const Profile = () => {
  const Auth = getAuth(app)
  const navigate = useNavigate()
  const usuariosCollection = collection(database, "usuarios")

  const registerUser = async()=>{
   const infoUsuario = await createUserWithEmailAndPassword(Auth,correo,password).then((usuario)=>{
    return usuario
   })
   console.log(infoUsuario)
   const docRef = doc(database, `usuarios/${infoUsuario.user.uid}`)
   setDoc(docRef,{correo:correo,
    cedula: cedula, 
    nombreCompleto:nameComplete, 
    telefono:telefono,
    password: password,
    rol:rol,
    direccion: direccion,
    createAt: new Date()
   })
   navigate('/admin/users')
  }
  
   
   const [correo, setCorreo] = useState('')
   const [cedula, setCedula] = useState('')
   const [nameComplete, setNameComplete] = useState('')
   const [telefono,setTelefono] = useState('')
   const [password,setPassword] = useState('')
   const [rol, setRol] = useState('') 
   const [direccion,setDireccion] = useState('')


   const handleGetCorreo =(e)=>{
     setCorreo(e.target.value)
   }

   const handleGetCedula =(e)=>{
    setCedula(e.target.value)
   }

   const handleSetNameComplete = (e)=>{
    setNameComplete(e.target.value)
   }

   const handleSetTelefono = (e)=>{
    setTelefono(e.target.value)
   }

   const handleSetPassword = (e)=>{
    setPassword(e.target.value)
   }

   const handleSetRol = (e)=>{
     setRol(e.target.value)
   }

   const handleSetDireccion = (e)=>{
    setDireccion(e.target.value)
   }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/user.png")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-12 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Input type="file" className="form-control"/>
                
                </div>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Cuenta de usuario</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Datos de usuario
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                    
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Cedula(*)
                          </label>
                          <Input
                            value={cedula}
                            onChange={handleGetCedula}
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="V-00000000"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input--name"
                          >
                            Nombre completo(*)
                          </label>
                          <Input
                            value={nameComplete}
                            onChange={handleSetNameComplete}
                            className="form-control-alternative"
                            id="input-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-name"
                          >
                            Telefono(*)
                          </label>
                          <Input
                            value={telefono}
                            onChange={handleSetTelefono}
                            className="form-control-alternative"
                            id="input-las-name"
                            placeholder="Phone"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de seguridad
                  </h6>
                  <div className="pl-lg-4">
                    <Row>

                    <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Correo electronico(*)
                          </label>
                          <Input
                            value={correo}
                            onChange={handleGetCorreo}
                            className="form-control-alternative"
                            id="input-username-alternative"
                            placeholder="Example@gmail.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Contraseña(*)
                          </label>
                          <Input
                            value={password}
                            onChange={handleSetPassword}
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Rol(*)
                          </label>
                        
                          <select className="form-control" value={rol} onChange={handleSetRol}>
                              <option value="#">Seleccionar..</option>
                              <option value="Administrador">Administrador</option>
                              <option value="Encargado">Encargado</option>
                              <option value="Captador">Captador</option>
                          </select>
                        </FormGroup>
                      </Col>
                    
                      
                    </Row>
               
                  </div>



                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de contacto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Direccion(*)
                          </label>
                          <Input
                            value={direccion}
                            onChange={handleSetDireccion}
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
               
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <div className="pl-lg-4">
                    <Button color="info" onClick={registerUser}>Guardar</Button>
                    <Button color="white">Cancelar</Button>
                  </div>
                
                </Form>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;

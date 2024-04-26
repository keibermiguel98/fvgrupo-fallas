
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
import {database} from 'database/firebase.js'
import { addDoc,collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductosAdd = () => {
  const navigate = useNavigate()
  const productoCollection = collection(database, "productos")
  
  const handlePushData = async ()=>{
    await addDoc(productoCollection, 
      {
        codigo:codigo,
        producto: nameProducto,
        proposito: sobre,
        codigosAlternos: {codigo1:codigo},
        createAt: new Date()
      }) 

    navigate('/admin/productos')
  }
   
   const [nameProducto, setNameProducto] = useState('')
   const [codigo, setCodigo] = useState('')
   const [sobre, setSobre] = useState('')
   
 
   const handleGetNameProducto =(e)=>{
    setNameProducto(e.target.value)
   }

   const handleGetCodigo = (e)=>{
    setCodigo(e.target.value)
   }

   const handleGetSobre = (e)=>{
    setSobre(e.target.value)
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
                        src={require("../../assets/img/theme/package.png")}
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
                    <h3 className="mb-0">Formulario de productos</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Codigo alterno
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Datos del producto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Codigo(*)
                          </label>
                          <Input
                            value={codigo}
                            onChange={handleGetCodigo}
                            className="form-control-alternative"
                            id="input-username-alternative"
                            placeholder="Codigo del producto"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Nombre del producto(*)
                          </label>
                          <Input
                            value={nameProducto}
                            onChange={handleGetNameProducto}
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Nombre del producto"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
               
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Uso</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label className="form-control-label">Proposito💊</label>
                      <Input
                        value={sobre}
                        onChange={handleGetSobre}
                        className="form-control-alternative"
                        placeholder="Por favor anexe el proposito del producto..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <Button color="info" onClick={handlePushData}>Guardar</Button>
                    <Button color="white" onClick={handlePushData}>Cancelar</Button>
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

export default ProductosAdd;

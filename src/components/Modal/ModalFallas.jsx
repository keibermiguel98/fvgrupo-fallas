import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, FormGroup, Input } from 'reactstrap';
import React, { useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { database, app } from 'database/firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const storage = getStorage(app)


export const ModalFallas=(args)=>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const fallasCollection = collection(database, "fallas")

    const [producto, setProducto] = useState("")
    const [cantidadSugerida, setSugerida] = useState("")
    const [existencia, setExistencia] = useState("")
    const [captador, setCaptador] = useState("")
    const [file,setFile] = useState('null')
    const [url,setUrl] = useState('')

    const handlePushPhoto = async (file)=>{
     const storageRef = ref(storage,'img-fallas/'+ v4())
     await uploadBytes(storageRef,file)
     const imageUrl = await getDownloadURL(storageRef)
     setUrl(imageUrl)
     console.log(url)
    }

    const handleGetInputProducto = (e)=>{
       setProducto(e.target.value)
    }

    const handleGetInputCantidadSugerida = (e)=>{
     setSugerida(e.target.value)
    }

     const handleGetInputExistencia = (e)=>{
     setExistencia(e.target.value)
    }

    const handleGetCaptador = (e)=>{
      setCaptador(e.target.value)
    }

    const handlePushDataFalla = async (e)=>{
      e.preventDefault()
       setModal(!modal)
       handlePushPhoto(file)
       await addDoc(fallasCollection, 
        {
         producto:producto,
         image: url,
         cantidadExistente: existencia, 
         cantidadSugerida:cantidadSugerida, 
         statusFallas:'Pendiente',
         captador: captador,
         createAt: new Date()
        })         
    }

    return(
        <>
        <Button className="my-4" color="success" type="button" onClick={toggle}>
            Nueva falla
        </Button>

        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>FORMULARIO FALLAS</ModalHeader>
         <ModalBody>
         <div className="pl-lg-4">
                    <Row>

                    <Col lg="12">
                        <FormGroup>
                          <Input type='file' onChange={e=>setFile(e.target.files[0])} />
                        </FormGroup>
                      </Col>

                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-captador"
                          >
                            Captador
                          </label>
                          <Input
                            onChange={handleGetCaptador}
                            value={captador}
                            className="form-control-alternative"
                            id="inputcaptador"
                            placeholder="Nombre completo"
                            type="text"
                          />
                        </FormGroup>
                      </Col>


                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Producto
                          </label>
                          <Input
                            onChange={handleGetInputProducto}
                            value={producto}
                            className="form-control-alternative"
                            id="input-producto"
                            placeholder="Example: Acetaminofen 200ML"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Existencia
                          </label>
                          <Input
                            value={existencia}
                            onChange={handleGetInputExistencia}
                            className="form-control-alternative"
                            id="input-existencia"
                            placeholder="0"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Cantidad sugerida
                          </label>
                          <Input
                            value={cantidadSugerida}
                            onChange={handleGetInputCantidadSugerida}
                            className="form-control-alternative"
                            id="input-sugerencia"
                            placeholder="0"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePushDataFalla}>
            Cargar falla
          </Button>{''}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}
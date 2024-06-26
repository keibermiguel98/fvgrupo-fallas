import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, FormGroup, Input } from 'reactstrap';
import React, { useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { database, app } from 'database/firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import swal from 'sweetalert2'
import { InputSelectFallas } from 'components/InputSelect/InputSelectFallas';

const storage = getStorage(app)

export const ModalFallas=({getFallas,fallas,args})=>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const fallasCollection = collection(database, "fallas")

    const [producto, setProducto] = useState("")
    const [captador, setCaptador] = useState("")
    const [falla,setFalla] = useState("")
    const [url,setUrl] = useState('')

    const handlePushPhoto = async (file)=>{
     const storageRef = ref(storage,'img-fallas/'+ v4())
     await uploadBytes(storageRef,file)
     const imageUrl = await getDownloadURL(storageRef)
     setUrl(imageUrl)
    }

    const handleGetInputFalla = (e)=>{
       setFalla(e.target.value)
    }
    const handleGetCaptador = (e)=>{
      setCaptador(e.target.value)
    }

    const handlePushDataFalla = async (e)=>{
      e.preventDefault()
       setModal(!modal)
         await addDoc(fallasCollection, 
          {
           producto:producto,
           image: url,
           tipoFalla: falla,
           statusFallas:'Pendiente',
           captador: captador,
           createAt: `${new Date()}`
          })   
        getFallas()  
        swal.fire({
          icon:'success',
          title: 'Grandioso🔥',
          text:"Su falla fue enviada con exito!"
        })   

        setProducto("")
        setCaptador("")
        setFalla("")
        setUrl("")
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
                          <Input type='file' className='form-control' onChange={(e)=>handlePushPhoto(e.target.files[0])} />
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

                          <InputSelectFallas fallas={fallas} setProducto={setProducto} producto={producto} />
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
                            className={captador===""? 'form-control border-danger':'form-control border-success' }
                            id="inputcaptador"
                            placeholder="Nombre completo"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Tipo de falla(*)
                          </label>
                        
                          <select className={falla===""? 'form-control border-danger':'form-control border-success' } value={falla} onChange={handleGetInputFalla}>
                              <option value="#">Seleccionar..</option>
                              <option value="Sin existencia">Sin existencia</option>
                              <option value="Poca existencia">Poca existencia</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>

                  </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePushDataFalla} className={producto  === '' ? 'disabled' : captador === '' ? 'disabled' : falla === '' ? 'disabled': '' }>
            Enviar falla
          </Button>{''}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}
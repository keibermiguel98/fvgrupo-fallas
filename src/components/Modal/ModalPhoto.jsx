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
    const [captador, setCaptador] = useState("")
    const [falla,setFalla] = useState("")
    const [file,setFile] = useState('')
    const [url,setUrl] = useState('')

    
    const handleGetFile=(e)=>{
      setFile(e.target.files[0])
      console.log(file)
    }

    const handlePushPhoto = async ()=>{
     const storageRef = ref(storage,'img-fallas/'+ v4())
     await uploadBytes(storageRef,file)
     const imageUrl = await getDownloadURL(storageRef)
     setUrl(imageUrl)
    }

   

   // const loadOption = (inputValue, callback)=>{
   //    setTimeout(()=>{
    //    const filteredOption = productos.filter(option=>option.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
    //    callback(filteredOption) 
    //  },10000)
   // }

    const handleGetInputFalla = (e)=>{
       setFalla(e.target.value)
    }
    const handleGetCaptador = (e)=>{
      setCaptador(e.target.value)
    }
    const handleGetProducto = (e)=>{
      setProducto(e.target.value)
    }


    const handlePushDataFalla = async (e)=>{
      e.preventDefault()
       setModal(!modal)
       handlePushPhoto(file)
         await addDoc(fallasCollection, 
          {
           producto:producto,
           image: url,
           tipoFalla: falla,
           statusFallas:'Pendiente',
           captador: captador,
           createAt: `${new Date()}`
          },3000)   
          
    }

    return(
        <>
        <Modal isOpen={modal} toggle={toggle} {...args}>
         <ModalBody>
         <div className="pl-lg-4">
                   <img/>

                  </div>
        </ModalBody>
      </Modal>
        </>
    )
}
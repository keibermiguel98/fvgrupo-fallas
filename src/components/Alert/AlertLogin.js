import React from 'react'
import { Alert } from 'reactstrap'

const AlertLogin = ({error}) => {
    console.log(error)
  return (
    <>
     {error === false ? 
         "" : <Alert color="danger">
         Usuario o contraseña incorrectos!
        </Alert>
    }  
    </>
  )
}

export default AlertLogin
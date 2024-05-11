import {deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import swal from 'sweetalert';

export const ButtonEmergentes = ({seletedRow,getFallas,setSelectedRows}) => {

    const onDeletePedido = ()=>{
        swal("Contraseña", {
          content: "input"
        })
        .then((value) => {
          if(value === 'fv2203'){
            seletedRow.map((item)=>{
              deleteDoc(doc(database, "fallas", item)).then(()=>{
              getFallas()
              console.log('se ha eliminado correctamente!')
             }).catch((error)=>{
               console.log(error)
               console.log('No se logro eliminar los documentos. Si el problema persiste por favor comunicarse con soporte tecnico!')
             })
         })
          
            swal("Perfecto!✅", "Los registros se han eliminado correctamente!", "success");
          }else{
            swal("Lo sentimos!❌", "No logramos eliminar los documentos seleccionados. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
          }
        });  
     

}
    const onChangeRecepcionado = ()=>{
      swal("Contraseña", {
        content: "input"
      })
      .then((value) => {
        if(value === 'fv2203'){
          seletedRow.map((item)=>{
            updateDoc(doc(database, "fallas", item),{statusFallas:'Recepcionado'}).then(()=>{
            getFallas()
            setSelectedRows([])
            console.log('se ha modificado correctamente!')
           }).catch((error)=>{
             console.log(error)
             console.log('No se logro modificar los documentos. Si el problema persiste por favor comunicarse con soporte tecnico!')
           })
       })
          swal("Perfecto!✅", "Los registros seleccionados fueron cambiados a > *Recepcionado*", "success");
        }else{
          swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
        }
      });  
}
    const onChangeSinRotacion = ()=>{
  swal("Contraseña", {
    content: "input"
  })
  .then((value) => {
    if(value === 'fv2203'){
      seletedRow.map((item)=>{
        updateDoc(doc(database, "fallas", item),{statusFallas:'Sin rotacion'}).then(()=>{
        getFallas()
        setSelectedRows([])
        console.log('se ha modificado correctamente!')
       }).catch((error)=>{
         console.log(error)
         console.log('No se logro modificar los documentos. Si el problema persiste por favor comunicarse con soporte tecnico!')
       })
   })
      swal("Perfecto!✅", "Los registros seleccionados fueron cambiados a > *Sin rotacion*", "success");
    }else{
      swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
    }
  });  
}
    const onChangeTransito = ()=>{
  swal("Contraseña", {
    content: "input"
  })
  .then((value) => {
    if(value === 'fv2203'){
      seletedRow.map((item)=>{
        updateDoc(doc(database, "fallas", item),{statusFallas:'En transito'}).then(()=>{
        getFallas()
        setSelectedRows([])
        console.log('se ha modificado correctamente!')
       }).catch((error)=>{
         console.log(error)
         console.log('No se logro modificar los documentos. Si el problema persiste por favor comunicarse con soporte tecnico!')
       })
   })
   swal("Perfecto!✅", "Los registros seleccionados fueron cambiados a > *Agotado*", "success");
  }else{
      swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
    }
  });  
}

  return (
       <div className={seletedRow.length === 0 ? "d-none" : "bg-secondary p-4" }>
            <button className="btn btn-outline-default" onClick={onDeletePedido}>Quitar</button>
            <button className="btn btn-outline-info" onClick={onChangeRecepcionado}>Recepcionado</button>
            <button className="btn btn-outline-default" onClick={onChangeSinRotacion}>Sin rotacion</button>
            <button className="btn btn-outline-warning" onClick={onChangeTransito}>En transito</button>
      </div>
  )
}
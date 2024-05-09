import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import {deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import Swal from 'sweetalert';
import swal from 'sweetalert2'

export const ButtonOption = ({id,getFallas}) => {

  const docRef = doc(database,'fallas',`${id}`)
  const deleteRef = doc(database,'fallas',id)

  const onDeletePedido = ()=>{
    swal.fire({
      title:"Password",
      input: "password",
    })
    .then((result) => {
      if(result.value === 'fv2203'){
          deleteDoc(deleteRef).then(()=>{
          getFallas()
          console.log('se ha modificado correctamente!')
        }).catch(()=>{
          console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
        })
        Swal("Perfecto!✅", "El registro se ha eliminado!", "success");
      }else{
        Swal("Lo sentimos!❌", "No se pudo eliminar la colleccion. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
      }
    });  
}

 const onChangeRecepcionado = ()=>{
    swal.fire({
      title:"Password",
      input: "password",
    })
      .then((result) => {
        if(result.value === 'fv2203'){
          updateDoc(docRef,{statusFallas:'Recepcionado'}).then(()=>{ 
            getFallas()
            console.log('se ha modificado correctamente!')
          }).catch(()=>{
            console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
          })
          Swal("Perfecto!✅", "Su registro ha cambiado > *Recepcionado*", "success");
        }else{
          Swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
        }
      });  
}

 const onChangeSinRotacion = ()=>{
    swal.fire({
      title:"Password",
      input: "password",
    })
  .then((result) => {
    if(result.value === 'fv2203'){
      updateDoc(docRef,{statusFallas:'Sin Rotacion'}).then(()=>{ 
        getFallas()
        console.log('se ha modificado correctamente!')
      }).catch(()=>{
        console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
      })
      Swal("Perfecto!✅", "Su registro ha cambiado > *Sin rotacion*", "success");
    }else{
      Swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
    }
  });  
}

 const onChangeTransito = ()=>{
    swal.fire({
      title:"Password",
      input: "password",
    })
  .then((result) => {
    if(result.value === 'fv2203'){
      updateDoc(docRef,{statusFallas:'En transito'}).then(()=>{ 
        getFallas()
        console.log('se ha modificado correctamente!')
      }).catch(()=>{
        console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
      })
      Swal("Perfecto!✅", "Su registro ha cambiado > *En transito*", "success");
    }else{
      Swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
    }
  });  
}


  return (
      <>
    <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              role="button"
              size="sm"
              color=""
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                onClick={() => onChangeTransito()}
              >
                En transito
              </DropdownItem>
              <DropdownItem
                onClick={() => onChangeRecepcionado()}
              >
                Recepcionado
              </DropdownItem>

              <DropdownItem
                onClick={() => onChangeSinRotacion()}
              >
                Poca rotacion
              </DropdownItem>
            
              <DropdownItem
                onClick={() => onDeletePedido()}
              >
                Quitar
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
     </>
  )
}
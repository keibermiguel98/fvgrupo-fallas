import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import {deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import swal from 'sweetalert';

export const ButtonOption = ({id,getFallas}) => {

  const docRef = doc(database,'fallas',`${id}`)
  const deleteRef = doc(database,'fallas',id)

  const onDeletePedido = ()=>{
    swal("Contraseña", {
      content: "input"
    })
    .then((value) => {
      if(value === 'fvgrupobodegon2203'){
          deleteDoc(deleteRef).then(()=>{
          console.log('se ha modificado correctamente!')
        }).catch(()=>{
          console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
        })
        getFallas()
        swal("Perfecto!✅", "El registro se ha eliminado!", "success");
      }else{
        swal("Lo sentimos!❌", "No se pudo eliminar la colleccion. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
      }
    });  
}
 //Cambio se ha realizado correctamente!
  const onChangeRecepcionado = ()=>{
      swal("Contraseña", {
        content: "input"
      })
      .then((value) => {
        if(value === 'fvgrupobodegon2203'){
          updateDoc(docRef,{statusFallas:'Recepcionado'}).then(()=>{ 
            console.log('se ha modificado correctamente!')
          }).catch(()=>{
            console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
          })
          getFallas()
          swal("Perfecto!✅", "Su registro ha cambiado > *Recepcionado*", "success");
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
    if(value === 'fvgrupobodegon2203'){
      updateDoc(docRef,{statusFallas:'En transito'}).then(()=>{ 
        console.log('se ha modificado correctamente!')
      }).catch(()=>{
        console.log('No se logro cambiar el status. Si el problema persiste por favor comunicarse con soporte tecnico!')
      })
      getFallas()
      swal("Perfecto!✅", "Su registro ha cambiado > *En transito*", "success");
    }else{
      swal("Lo sentimos!❌", "No se pudo cambiar el status. Si el problema persiste comunicate con el Departamento de Informatica!", "error");
    }
  });  
}


  return (
      <>
    <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#"
              role="button"
              size="sm"
              color=""
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                href="#"
                onClick={() => onChangeTransito()}
              >
                En transito
              </DropdownItem>
              <DropdownItem
                href="#"
                onClick={() => onChangeRecepcionado()}
              >
                Recepcionado
              </DropdownItem>
            
              <DropdownItem
                href="#"
                onClick={() => onDeletePedido()}
              >
                Quitar
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
     </>
  )
}
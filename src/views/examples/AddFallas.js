import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import HeaderFallas from "components/Headers/HeaderFallas.js";
import { ModalFallas } from "components/Modal/ModalFallas";
import {collection, getDocs, getDoc,deleteDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import { useEffect, useState } from "react";

const AddFallas = () => {

  const [fallas,setFallas] = useState([])

  const fallasCollection = collection(database, "fallas")

  const getFallas = async ()=>{
  const fails = await getDocs(fallasCollection)
   setFallas(
    fails.docs.map((doc)=>({...doc.data(), id:doc.id}))
   )}

  useEffect(()=>{
   getFallas()
  },[])

  return (
    <> 
      <HeaderFallas />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listado de fallas</h3>
                <ModalFallas />
               
              </CardHeader>
              <Table className="align-items-center table-flush" responsive hover>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Existencia</th>
                    <th scope="col">Sugerido</th>
                    <th scope="col">Status</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Fecha</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  { fallas.map((data)=>(                      
                    <tr key={data.id}>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/box.png")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {data.medicamentos}
                          </span>
                        </Media>
                      </Media>
                    </th>

                    <td>{data.cantidadExistente}</td>
                    <td>{data.cantidadSugerida}</td>

                    <td>
                    <Badge color="primary" pill>
                      {data.statusFallas}
                    </Badge>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{data.usuario}</span> 
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{data.usuarios}</span> 
                      </div>
                    </td>

                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Pedido
                          </DropdownItem>
                          <DropdownItem
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Fuera del mercado
                          </DropdownItem>
                          <DropdownItem
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Agotado
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                    </tr>

                    ))
                        }
            
                </tbody>
              </Table>
        
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddFallas;

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
  Button
} from "reactstrap";
// core components
import HeaderFallas from "components/Headers/HeaderFallas.js";
import { ModalFallas } from "components/Modal/ModalFallas";
import {collection, getDocs, getDoc,deleteDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import { useEffect, useState } from "react";

const AddFallas = () => {

  const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
      <HeaderFallas/>
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listado de fallas</h3>
                <ModalFallas getFallas={getFallas}/>
                <Button color="secondary" onClick={getFallas} 
                 className="m-2"><i className="ni ni-spaceship"></i></Button>

              </CardHeader>
             
              <Table className="align-items-center table-flush" responsive hover>
                <thead className="thead-light">
                  <tr>
                    <th scope="col"> PRODUCTO</th>
                    <th scope="col">TIPO DE FALLA</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">CAPTADOR</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  { fallas.map((data)=>(                      
                    <tr key={data.id}>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          onClick={toggle}
                          className="avatar rounded-circle mr-3"
                          href={!data.image ? "#" : data.image}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/picture.png")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {data.producto}
                          </span>
                        </Media>
                      </Media>
                    </th>

                    <td>{data.tipoFalla}</td>

                    <td>
                    <Badge color="primary" pill>
                      {data.statusFallas}
                    </Badge>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{data.captador}</span> 
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

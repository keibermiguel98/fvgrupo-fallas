import {
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
import { Link } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";  
import { database } from "database/firebase";
import { useEffect, useState } from "react";
  
const Productos = () => {
   const [producto,setProductos] = useState([])
   const productosCollection = collection(database, "productos")
    
    const getProductos = async()=>{
      const productos = await getDocs(productosCollection)
      setProductos(
        productos.docs.map((data)=>({...data.data(), id:data.id}))
      )
    } 

    useEffect(()=>{
       getProductos()
    },[])

    return (
      <> 
        <HeaderFallas />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Listado de productos</h3>
                  
                  <Link to="/admin/productos/new-product" className="my-4 btn btn-success" color="success" type="button">
                    Nuevo producto
                  </Link>
                 
                </CardHeader>
                <Table className="align-items-center table-flush" responsive hover>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Codigo</th>
                      <th scope="col">Fecha</th>
                      <th scope="col"/>
                    </tr>
                  </thead>
                  <tbody>
                      
                      { producto.map((prop)=>(
                          <tr key={prop.id}>
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
                               {prop.producto}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {prop.codigo}
                      </td>
                      <td>
                          {prop.fecha}
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
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Pedido
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Fuera del mercado
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
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
  
  export default Productos;
  
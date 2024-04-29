import Index from "views/Index.js";
import AddFallas from "views/examples/AddFallas";
//import Usuarios from "views/examples/Usuarios";
import Productos from "views/examples/Productos";
//import Login from "views/examples/Login";

var routes = [
//  {
 //   path: "/index",
  //  name: "Dashboard",
   // icon: "ni ni-tv-2 text-primary",
   // component: <Index />,
  //  layout: "/admin",
 // },
  {
    path: "/Addfallas",
    name: "Fallas",
    icon: "ni ni-time-alarm text-danger",
    component: <AddFallas/>,
    layout: "/admin",
  },

 // {
  //  path: "/productos",
 //   name: "Productos",
   // icon: "ni ni-box-2 text-info",
   // component: <Productos />,
   // layout: "/admin",
 // },
 // {
  //  path: "/users",
  //  name: "Usuarios",
  //  icon: "ni ni-single-02 text-yellow",
   // component: <Usuarios />,
  //  layout: "/admin",
 // },
 // {
   // path: "/login",
  //  name: "",
  //  icon: "ni ni-key-25 text-info d-none",
  //  component: <Login/>,
  //  layout: "/auth",
  //}
];
export default routes;

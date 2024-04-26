import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Profile from "views/examples/Profile";
import ProductosAdd from "views/examples/ProductosAdd";
import { app } from 'database/firebase';
import { getAuth, onAuthStateChanged} from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { addAuth } from 'features/auth/authSlice';

const App = () => {
     const Auth = getAuth(app)
     const dispatch = useDispatch()
     const Aauth = useSelector(state=> state.auth)
    
    onAuthStateChanged(Auth,(usuarioFirebase)=>{
      dispatch(addAuth(usuarioFirebase))
    })
    
   //<Route path="/auth/*" element={<AuthLayout/>} />       

    return (
       <BrowserRouter>
         <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/admin/profile" element={<Profile/>}/>
          <Route path="/admin/productos/new-product" element={<ProductosAdd/>}/>
          <Route path="*" element={
          <Navigate to="/admin/index" replace />}/>
      </Routes>
    </BrowserRouter>
  )}

export default App

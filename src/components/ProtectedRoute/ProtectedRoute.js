import { useNavigate } from "react-router-dom"

export const ProtectedRoute = ({user,children})=>{
    const navigate = useNavigate()
   if(!user){
    console.log('no se encuentra user')
    return navigate("/auth")
   }
  return children
}
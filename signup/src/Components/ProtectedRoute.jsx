import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/userContext'
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const { user } = useContext(userContext);
    if(!user) {
        return navigate('/')
    }
  return children;
}

export default ProtectedRoute


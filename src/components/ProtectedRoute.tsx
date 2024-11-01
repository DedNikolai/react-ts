import { FC, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import {Navigate, useLocation} from 'react-router-dom';

type LocationState = {
  pathname: string
}

interface IProtectedRouteProps {
    children: JSX.Element
}


const ProtectedRoute: FC<IProtectedRouteProps> = ({children}) => {
    const location = useLocation();
   
    const context = useContext(AuthContext);

    return (
        context?.user ? children : <Navigate to='/login' state={{from: location as LocationState}}/>
    )
}

export default ProtectedRoute
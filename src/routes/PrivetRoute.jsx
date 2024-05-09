import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom/dist";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user) {
        return children;
    }
    return <Navigate to={'/'}></Navigate>;
};

export default PrivetRoute;
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom/dist";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex h-screen w-full justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }

    if(user) {
        return children;
    }
    return <Navigate to={'/'}></Navigate>;
};

export default PrivetRoute;
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute (props){
    const [token] = useAuth();

    if(!token){
        return <Redirect to="/login" />
    }    
    return <Route {...props} />

}
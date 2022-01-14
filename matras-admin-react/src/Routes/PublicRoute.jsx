import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PublicRoute (props){
    const [token] = useAuth();

    if(token){
        return <Redirect to="/" />
    }    
    return <Route {...props} />

}
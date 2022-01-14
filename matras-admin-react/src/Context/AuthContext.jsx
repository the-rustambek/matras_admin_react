import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const AuhtContext = createContext();

export default AuhtContext;

export function AuthProvider({children}){
    const [token,setToken] = useState(
        window.localStorage.getItem("token")
    );
    
        useEffect(() =>{
            if(token){
                window.localStorage.setItem("token",token);
            }else{
                window.localStorage.removeItem("token")
            }
        },[token]);

    return (
        <AuhtContext.Provider value={{token,setToken}} >
            <AuhtContext.Consumer>
                {() => children}
            </AuhtContext.Consumer>
        </AuhtContext.Provider>
    )
}


export function useAuth(e){
    const {token,setToken} = useContext(AuhtContext);

    return [token,setToken];
}
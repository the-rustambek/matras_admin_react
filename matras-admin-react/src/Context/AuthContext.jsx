import { createContext } from "react";
import { useState } from "react/cjs/react.development";

const AuhtContext = createContext();

export default AuhtContext;

export function AuthProvider({children}){
    const [token,setToken] = useState();

    return (
        <AuhtContext.Provider value={{token,setToken}} >
            <AuhtContext.Consumer>
                {() => children}
            </AuhtContext.Consumer>
        </AuhtContext.Provider>
    )
}
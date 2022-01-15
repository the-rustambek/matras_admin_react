import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({children}){
  const [token,setToken] = useState(
    window.localStorage.getItem("token")
  );


  useEffect(()=>{
    if(token){
      window.localStorage.setItem("token",token);

    }
    else{
      window.localStorage.removeItem("token")
    }
  },[token])

  return(
    <AuthContext.Provider value={{token,setToken}}>
      <AuthContext.Consumer>
        {() => children}
      </AuthContext.Consumer>
    </AuthContext.Provider>
  )
}

export function useAuth(e){
  const {token,setToken} = useContext(AuthContext);

  return [token,setToken];
}
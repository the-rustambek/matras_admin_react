import { createContext,useState } from "react";

export const MatrasContext = createContext();

export const MatrasContextProvider = (props) =>{
    const [matrass,setMatrass] = useState([]);
    const [ selectedMatras,setSelectedMatras] = useState(null);
    
const addMatrass = (matras) =>{
    setMatrass([...matrass,matras]);
};
return ( <MatrasContext.Provider value={{
    matrass,setMatrass,addMatrass,selectedMatras,setSelectedMatras
}} >
    {props.children}
</MatrasContext.Provider>)

}
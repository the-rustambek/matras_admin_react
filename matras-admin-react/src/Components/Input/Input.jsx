import "./Input.css";

const Input = (props) =>{
    return(
        <>
        <input className="input" required autoComplete="off" {...props}  />


        </>
    )
}


export default Input;
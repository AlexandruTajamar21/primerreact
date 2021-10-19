import Matematicas from '../Matematicas/Matematicas';
import React, {useState} from "react";

function Padre() {

    const [numero, setNumero] = useState(0);
  
    const metodoPadre = (cambio) =>{
        console.log(" numero "+numero);
        console.log(" cambio "+cambio);
      setNumero(cambio);
    }
  
    return (
      <div className="App">
          <h1 id="resultado">El numero que estas tratando es: {numero}</h1>
        <Matematicas inicio={"5"} posicion={"1"} metodoPadre={metodoPadre}></Matematicas>
        <Matematicas inicio={"6"} posicion={"2"} metodoPadre={metodoPadre}></Matematicas>
        <Matematicas inicio={"7"} posicion={"3"} metodoPadre={metodoPadre}></Matematicas>
      </div>
    );
  }
  
  export default Padre;
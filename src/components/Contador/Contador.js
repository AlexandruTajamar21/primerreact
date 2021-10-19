import React, {useState} from "react";

function Contador(){

        const [numero, setNumero] = useState(0);
        
        const sumarContador = () =>{
            setNumero(numero + 1);
        }

    return(

        <div>
            <h1>Ejemplo de State React</h1>
            <h2 style={{color:"blue"}}> Valor del contador: {numero}</h2>
            <button onClick={() => setNumero(numero+1)}>Llamar al contador</button>
            <button onClick={() => setNumero(numero-1)}>Restar Contaddor</button>
        </div>
    )
}
export default Contador;
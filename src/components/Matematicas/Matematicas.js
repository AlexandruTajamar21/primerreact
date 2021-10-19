import Padre from "../Padre/Padre";

function Matematicas(props){

    const{inicio,posicion, metodoPadre} = props;
    var numeroHijo = inicio;

    const duplicaNumero = (num) =>{
        numeroHijo = num*2;
        console.log("El numero del hijo " + posicion+ " era: "+ num + ", y lo ha duplicado a: " + numeroHijo);
        metodoPadre(numeroHijo);
    }

    const triplicaNumero = (num) => {
        numeroHijo = num*3;
        console.log("El numero del hijo " + posicion+ " era: "+ num + ", y lo ha triplicado a: " + numeroHijo);
    }
    const reseteaNumero = (num) =>{
        numeroHijo = num;
        console.log("El numero "+ posicion +" ha vuelto a ser: " + inicio)
    }

    return(
        <div>
            <h1>Matematicas con el numero: {inicio}</h1>
            <button onClick={() => duplicaNumero(numeroHijo)}>Duplica el numero</button>
            <button onClick={() => triplicaNumero(numeroHijo)}>Triplica el numero</button>
            <button onClick={() => reseteaNumero(inicio)}>Reset</button>
        </div>
    );
}
export default Matematicas;
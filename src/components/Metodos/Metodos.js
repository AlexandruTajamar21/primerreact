function Metodos(){

    var ejemplo = "Soy una variable de ejemplo";

    var estiloFeo = {
        color:"white", backgroundColor:"green"
    }

    const mostrarMensajes = () =>{
        console.log("Has pulsado el boton");
        ejemplo = "He cambiado";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) =>{
        var doble = numero*2;
        console.log(doble);
    }

    return(
        <div>
            <h1 style={estiloFeo}>Ejemplo de metodos React</h1>
            <h2 style={{color:"red"}}>{ejemplo}</h2>
            <button onClick={() => mostrarMensajes() }>Muestra mensaje</button>
            <button onClick={() => dobleNumero(7)}>Muestrame el numero</button>
        </div>
    );
}

export default Metodos;
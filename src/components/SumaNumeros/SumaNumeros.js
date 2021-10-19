import foto from "../Assets/Images/batman.jpg";
function SumaNumeros(){
    var estilo = {
        color:"red"
    }

    var estiloImagen ={
        width:"200px", height:"200px"
    }

    const hazlaSuma = (numero1,numero2) =>{
        var primero = numero1;
        var segundo = numero2;
        console.log("Has sumado " + primero + " y " + segundo +" y el resultado es " + (primero + segundo));
    }

    return(
        <div>
            <img src={foto} className="App-logo" style={estiloImagen}></img>
            <button onClick={()=> hazlaSuma(1,2)} style={estilo}> Suma Numeros</button>
        </div>
    );
}

export default SumaNumeros;
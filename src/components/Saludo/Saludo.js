function Saludo(props){
    var dato = "bienvenido a clase"

    //INVENTAMOS UN METODO DE VARIABLE
    //QUE ES UN METODO PARA LLAMAR A ALGUNA ACCION QUE TENGAMOS EN EL PADRE
    const {nombre, edad, metodoPadre} = props;

    return (
        <div className="App">
            <button onClick={() => metodoPadre(" el hijo un saludo" + props.nombre + " de " + props.edad + " años")}>Llamar al Padre</button>
        </div>
    );
}
export default Saludo;
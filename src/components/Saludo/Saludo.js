function Saludo(props){
    var dato = "bienvenido a clase"
    // var nombre = props.nombre;
    // var edad = props.edad;

    const {nombre, edad} = props;

    const miMetodo=()=>{
        //Haz algo  
    }

    return (
        <div className="App">
            <h1> Saludando a {nombre} de {edad}</h1>
            <h2> {dato}</h2>
        </div>
    );
}
export default Saludo;
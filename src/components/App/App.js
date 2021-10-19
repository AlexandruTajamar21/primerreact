//import logo from './logo.svg';
import Saludo from '../Saludo/Saludo';
import Matematicas from '../Matematicas/Matematicas';
import './App.css';

function App() {

  var numero = 5;

  const metodoPadre = (descripcion) =>{
    console.log(descripcion);
  } 
  const sumaPadre = (num) =>{
    console.log("El numero del padre era " + num + " y lo ha convertido en " + num*3);
  }

  return (
    <div className="App">
      <Matematicas numero={numero} metodoPadre={metodoPadre}></Matematicas>
      <button onClick={() => sumaPadre(numero)}>Suma del padre</button>
    </div>
  );
}

export default App;

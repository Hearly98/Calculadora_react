
import './App.css';
import Boton from './componentes/Boton';  
import freeCodeCampLogo from './img/freeCodeCampLogo.png'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'
function App() {

  const [input, setInput]= useState('')
  //funcion agregar input
  const agregarInput = val =>{
    //actualizar el input
    setInput(input + val);
  }
  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
    
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
          {/*creando filas para los botones de la calculadora*/}
              <div>
                <Pantalla input={input}/>
              </div>
              <div className='fila'>
                <Boton manejarClick={agregarInput}>1</Boton>
                <Boton manejarClick={agregarInput}>2</Boton>
                <Boton manejarClick={agregarInput}>3</Boton>
                <Boton manejarClick={agregarInput}>+</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClick={agregarInput}>4</Boton>
                <Boton manejarClick={agregarInput}>5</Boton>
                <Boton manejarClick={agregarInput}>6</Boton>
                <Boton manejarClick={agregarInput}>-</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClick={agregarInput}>7</Boton>
                <Boton manejarClick={agregarInput}>8</Boton>
                <Boton manejarClick={agregarInput}>9</Boton>
                <Boton manejarClick={agregarInput}>*</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClick={calcularResultado}>=</Boton>
                <Boton manejarClick={agregarInput}>0</Boton>
                <Boton manejarClick={agregarInput}>.</Boton>
                <Boton manejarClick={agregarInput}>/</Boton>
              </div>
              <div className='fila'> 
                <BotonClear manejarClear={()=> setInput('')}>
                  Limpiar
                </BotonClear>
              </div>
      </div>
    </div>
  );
}

export default App;

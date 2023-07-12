import React from "react";
import '../css/Boton.css'
function Boton (props){
        const esOperador = valor =>{
            {/* si el valor no es un numero o no tiene punto o no es igual al signo = */}
                return isNaN(valor) && (valor != '.') && (valor != '=');
        }
    return(
        <div className={`boton-contenedor ${esOperador(props.children)?"operador":null}`.trimEnd()}
        onClick={()=>props.manejarClick(props.children)}> 
        {/*el metodo trim permite remover espacios de una cadena de caracteres, trimEnd remueve al final*/}
            {props.children}
        </div>
        );
}

export default Boton;
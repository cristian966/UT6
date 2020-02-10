import React,  { Component } from "react";
import Imagen from "react-image";

class SelectoresAtributo extends Component{

    render(){

        return(
            <div>
                <a href="https://www.google.es/" target="">Enlace a Google</a>
                <br />
                <a href="https://www.google.es/" target="_self">Enlace a Google con el atributo de target _self</a>
                <br />
                <Imagen alt="k2" src={require('./imagenes/k2.jpg')} />
                <br />
                <p className="claseparrafo-1">
                    este parrafo va a cumplir un selector de atributos 
                </p>

                <p className="claseselector1">
                    Va a cumplir un selector de atributos para elementos con el atributo class y valor  
                </p>
            </div>
        )

    }


}
//$ npm install react -image instalar imagenes
export default SelectoresAtributo;
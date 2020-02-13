import React,  { Component } from "react";
import SelectoresAtributo from "./selectoresAtributo";
import Trabajoconformularios from "./Trabajoconformularios";
import Animaciones from "./Animaciones";
import Distribucion from "./Distribucion";
import Medidafr from "./Medidafr";

class Aplicacion extends Component {

    render(){


        return(

            <div>
                {/* <SelectoresAtributo /> */}
                {/*<Trabajoconformularios />*/}
                <Animaciones />
                <Distribucion />
                <Medidafr />
            </div>

        )
            
    }
}

export default Aplicacion;


import React,  { Component } from "react";


class Trabajoconformularios extends Component{

    render(){

        return(
            <div>
                <form name="formulario1" id="formularioid" action="">
                    <fieldset>
                        <legend> Formulario con React </legend>
                        <label for="campotextoid">Nombre: </label>
                        <input type="text" name="campotexto1" placeholder="Introduce tu nombre" id="campotextoid"></input>
                        <br />
                        <label for="campobusquedaid">Campo de busqueda: </label>
                        <input type="text" name="campobusqueda" className="claseinput1" id="campobusquedaid"></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Trabajoconformularios
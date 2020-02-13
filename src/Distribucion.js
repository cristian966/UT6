import React,  { Component } from "react";


const Distribucion = ()=>{

    return(
    <div className="contenedorgrid">

        <header className="contenedorgrid__cabecera">
            <nav className="contenedorgrid__cabecera__menu">
                <div className="">Div 1 de header</div>
                <div className="">Div 2 de header</div>
                <div className="">Div 3 de header</div>
            </nav>
        </header>

        <aside className="contenedorgrid__aside1">
            Primer Aside main
        </aside>

        <main className="contenedorgrid__main">
            
            Este es el MAIN
            
        </main>

        <aside className="contenedorgrid__aside2">
            Segundo Aside del main
        </aside>

        <footer className="contenedorgrid__footer">
            Esto es el footer
        </footer>

    </div>
    )
}

export default Distribucion;
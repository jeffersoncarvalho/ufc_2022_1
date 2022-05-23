import React, { Component } from "react";

//função clássica
/*function HelloWorld() {
    return (
        <div>
            <h1>Hello World React!</h1>
        </div>
    )
}*/

//arrow versão 0
/*const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World React com Arrow!</h1>
        </div>
    )
}*/

//arrow versão 1
/*const HelloWorld = () =>
 <div>
     <h1>Hello World React com Arrow simplificada!</h1>
 </div>
*/

//Componentes com classes
class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello World React com Classe!</h1>
            </div>
        )
    }
}

export default HelloWorld
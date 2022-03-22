import React, { Component } from "react";
const x = 10
const y = 5

/*const MeusDadosProps = (props) => 
    <div>
        <h2>Nome: {props.nome}</h2>
        <h2>Curso: {props.curso}</h2>
        <h2>Soma: {x+y}</h2>
    </div>
*/

class MeusDadosProps extends Component {
    render() {
        // {nome,curso} = this.props
        return (
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h2>Curso: {this.props.curso}</h2>
            </div>
        )
    }
}

export default MeusDadosProps
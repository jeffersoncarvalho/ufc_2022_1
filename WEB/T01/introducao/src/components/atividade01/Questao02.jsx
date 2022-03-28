import React, { Component } from "react";

/*class QuestaoO2 extends Component {
    render() {
        return (
            <div>
                <h2>Nome: Fulano de Tal da Silva</h2>
                <h2>Curso: Engenharia Espacial</h2>
                <h2>Cidade: Quixadá</h2>
            </div>
        )
    }
}*/

class QuestaoO2 extends Component {
    render() {
        const {nome,curso,cidade} = this.props
        return (
            <div>
                <h2>Nome: {nome}</h2>
                <h2>Curso: {curso}</h2>
                <h2>Cidade: {cidade}</h2>
            </div>
        )
    }
}

export default QuestaoO2
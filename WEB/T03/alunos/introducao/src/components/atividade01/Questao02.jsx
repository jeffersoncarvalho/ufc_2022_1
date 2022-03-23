import React, { Component } from "react";

/*class Questao02 extends Component {
    render() {
        return (
            <div>
                <h2>Nome: Jefferson de Carvalho</h2>
                <h2>Curso: Sistemas de Informação</h2>
                <h2>Nome: Quixadá</h2>
            </div>
        )
    }
}*/

class Questao02 extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const {nome,curso,cidade} = this.props   
        return (
            <div>
                <h2>Nome: {nome}</h2>
                <h2>Curso: {curso}</h2>
                <h2>Nome: {cidade}</h2>
            </div>
        )
    }
}

export default Questao02
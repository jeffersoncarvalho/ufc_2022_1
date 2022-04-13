import React from "react";

/*function Questao01() {
    return (
        <div>
            <h2>Nome: Jefferson de Carvalho</h2>
            <h2>Curso: Sistemas de Informação</h2>
            <h2>Cidade: Quixadá</h2>
        </div>
    )
}*/

/*const Questao01 = () =>
    <div>
        <h2>Nome: Jefferson de Carvalho</h2>
        <h2>Curso: Sistemas de Informação</h2>
        <h2>Cidade: Quixadá</h2>
    </div>*/

/*const Questao01 = (props) =>
    <div>
        <h2>Nome: {props.nome}</h2>
        <h2>Curso: {props.curso}</h2>
        <h2>Cidade: {props.cidade}</h2>
    </div>
*/

const Questao01 = (props) => {
    const { nome, curso, cidade } = props
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <h2>Curso: {curso}</h2>
            <h2>Cidade: {cidade}</h2>
        </div>
    )
}



export default Questao01

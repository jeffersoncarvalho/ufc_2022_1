import React from "react";

/*function QuestaoO1() {
    return (
        <div>
            <h2>Nome: Fulano de Tal</h2>
            <h2>Curso: Engenharia Espacial</h2>
            <h2>Cidade: Quixadá</h2>
        </div>
    )
}*/

/*const QuestaoO1 = () =>
    <div>
        <h2>Nome: Fulano de Tal</h2>
        <h2>Curso: Engenharia Espacial</h2>
        <h2>Cidade: Quixadá</h2>
    </div>
*/

/*const QuestaoO1 = (props) =>
    <div>
        <h2>Nome: {props.nome}</h2>
        <h2>Curso: {props.curso}</h2>
        <h2>Cidade: {props.cidade}</h2>
    </div>
*/

const QuestaoO1 = (props) => {
    const { nome, curso, cidade } = props
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <h2>Curso: {curso}</h2>
            <h2>Cidade: {cidade}</h2>
        </div>
    )
}


export default QuestaoO1
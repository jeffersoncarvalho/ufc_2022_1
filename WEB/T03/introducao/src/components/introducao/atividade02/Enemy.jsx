import React from "react";

const Enemy = (props) => {
    return (
        <div>
            <h2>Sou o inimigo {props.nome} e estou lutando na arena {props.arena}</h2>
        </div>
    )
}

export default Enemy
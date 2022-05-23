import React from "react";

const Enemy = (props) => {
    return (
        <div>
            <h3>Sou o inimigo {props.nome} na arena {props.arena}</h3>
        </div>
    )
}

export default Enemy
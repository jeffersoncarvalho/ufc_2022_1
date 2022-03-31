import React from "react";

const Filho = (props) => {
    return (
        <div>
            <button onClick={()=>props.notificarPai("Oi Pai, tudo bom?")}>
                Enviar mensagem pro meu pai.
            </button>
        </div>
    )
}

export default Filho
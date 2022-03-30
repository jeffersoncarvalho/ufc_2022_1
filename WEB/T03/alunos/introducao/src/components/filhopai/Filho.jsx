import React from "react";

const Filho = (props) => {
    return (
        <div>
            <button onClick={
                ()=>{
                    //alert('Jefferson')
                    props.notificarPai('Oi Pai, tudo bem?',100)
                }
            }>
                Enviar Mensagem pro meu Pai
            </button>
        </div>
    )
}

export default Filho
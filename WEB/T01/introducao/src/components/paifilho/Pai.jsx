import React from "react";
import Filho from "./Filho";

const Pai = () => {

    function receberMensagem(msg){
        //alert("Recebi mensagem do meu filho: " + msg)
        alert(`Recebi mensagem do meu filho: ${msg}`) //use a crase
    }

    return (
        <div>
            <Filho notificarPai={receberMensagem}/>
        </div>
    )
}

export default Pai
import React from "react";
import Filho from "./Filho";

const Pai = () => {

    function mensagemRecebidaDoMeFilho(msg,grana){
        alert(`Recebi do meu filho: ${msg}, pediu emprestado: ${grana}`) //usando crase
        //alert("Recebi do meu filho:" + msg + ", pediu emprestado: " + grana)
        //alert('Recebi do meu filho:' + msg + ', pediu emprestado: ' + grana)
    
    }

    return (
        <div>
            <Filho notificarPai = {mensagemRecebidaDoMeFilho}/>
        </div>
    )
}

export default Pai
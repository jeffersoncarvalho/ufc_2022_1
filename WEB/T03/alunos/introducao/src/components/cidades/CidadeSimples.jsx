import React from "react";

const CidadeSimples = () => {
    let fortaleza = 0, quixada = 0, limoeiro = 0, crato = 0 
    return (
        <div>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Quixadá: {quixada}</h3>
            <h3>Limoeiro do Norte: {limoeiro}</h3>
            <h3>Crato: {crato}</h3>
            <button onClick={()=>fortaleza++}>Votar em Fortaleza</button>
            <button onClick={()=>quixada++}>Votar em Quixada</button>
            <button onClick={()=>limoeiro++}>Votar em Limoeiro</button>
            <button onClick={()=>crato++}>Votar em Crato</button>
        </div>
    )
}

export default CidadeSimples
import React, { useState, useEffect } from "react";

const ContadorComHook = () => {

    const [fortaleza, setFortaleza] = useState(0)
    const [quixada, setQuixada] = useState(0)
    const [status, setStatus] = useState('PAR')

    useEffect(
        ()=>{
            if(fortaleza%2==0) setStatus('PAR')
            else setStatus('ÍMPAR')
        },
        [fortaleza]
    )

    return (
        <div>
            <h2>Status: {status}</h2>
            <h2>Contador com Hooks</h2>
            <h2>Fortaleza: {fortaleza}</h2>
            <h2>Quixadá: {quixada}</h2>
            <button onClick={() => setFortaleza((prev)=>prev+1)}>Votar em Fortaleza</button>
            <button onClick={() => setQuixada(quixada+1)}>Votar em Quixada</button>
        </div>
    )
}

export default ContadorComHook
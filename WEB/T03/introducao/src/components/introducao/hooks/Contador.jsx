import React, { Component, useState, useEffect } from "react";

/*class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {contador:0}
    }
    render() {
        return (
            <div>
                <h2>Valor do Contador: {this.state.contador}</h2>
                <button onClick={() => this.setState({contador:this.state.contador+1})}>
                    Aumentar Contador
                </button>
            </div>
        )
    }
}*/

const Contador = () => {
    const [contador,setContador] = useState(0)
    const [status,setStatus] = useState('PAR')
    //const [nome,setNome] = useState('Jefferon')
    useEffect(
        ()=>{
            /*if(contador%2 == 0) setStatus('PAR')
            else setStatus('ÍMPAR')*/
            (contador%2==0)?
                setStatus('PAR')
                :
                setStatus('ÍMPAR')
        }
        ,
        [contador]
    )

    return (
        <div>
            <h2>Valor do Contador: {contador}</h2>
            <h2>Par ou Ímpar?: {status}</h2>
            <button onClick={()=> setContador(contador+1)}>
                Aumentar Contador
            </button>
        </div>
    )
}

export default Contador
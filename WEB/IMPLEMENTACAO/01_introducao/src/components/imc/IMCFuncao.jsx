import React from "react";

const IMCFuncao = (props) => {

    const imc = calculaIMC(props.peso, props.altura)
    const {peso,altura} = props

    function calculaIMC(peso,altura) {
        return peso/(altura*altura)
    }

    function meuTitulo(){
        return <h1>Cálculo do IMC</h1>
    }

    function situacao(imc) {
        if (imc < 17) {
            return <h3>Muito abaixo do peso</h3>
        }else if (imc >= 17 && imc < 18.5){
            return <h3>Abaixo do peso</h3>
        }else if (imc >= 18.5 && imc < 25){
            return <h3>Peso normal</h3>
        }else if (imc >= 25 && imc < 30){
            return <h3>Acima do peso</h3>
        }else if (imc >= 30 && imc < 35){
            return <h3>Obesidade I</h3>
        }else if (imc >= 35 && imc < 40){
            return <h3>Obesidade II</h3>
        }else {
            return <h3>Obesidade III</h3>
        }
    }

    return (
        <div>
            {meuTitulo()}
            <h2>Peso: {peso}</h2>
            <h2>Peso: {altura}</h2>
            <h2>IMC: {imc}</h2>
            <h2>IMC: {imc.toFixed(5)}</h2>
            {situacao(imc)}
        </div>
    )
}

export default IMCFuncao
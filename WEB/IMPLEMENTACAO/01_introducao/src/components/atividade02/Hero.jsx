import React from "react";

const Hero = (props) => {
    
    const {nome,arena} = props

    function testaAreana() {
        if(props.arena==undefined)
            return <h3>Sou o Herói {nome} sem arena</h3>
        return <h3>Sou o Herói {nome} na arena {arena}</h3>
    }

    return (
        <div>
            {testaAreana()}
        </div>
    )
}

export default Hero
import React, { Component } from "react";

class Personagem extends Component {
    render() {
        const {nome,casa,localizacao} = this.props
        return (
            <div>
                Personagem {nome} da Casa {casa} em {localizacao}.
            </div>
        )
    }
}

/*const Personagem = () => {
    return (
        <div>

        </div>
    )
}*/

export default Personagem
import React, { Component } from "react";

class CidadeSimples extends Component {

    constructor(props){
        super(props)
        this.state = {fortaleza:0,quixada:0}
    }

    votarFortaleza() {
        this.setState({fortaleza:this.state.fortaleza + 1})
    }

    render() {
        
        return (
            <div>
                <h2>Fortaleza: {this.state.fortaleza}</h2>
                <h2>Quixadá: {this.state.quixada}</h2>
                <button onClick={()=>this.votarFortaleza()}>Votar em Fortaleza</button>
                <button onClick={()=>this.setState({quixada:this.state.quixada+1})}>Votar em Quixada</button>
            </div>
        )
    }
}

export default CidadeSimples
import React, { Component } from "react";
//import Personagem from "./Personagem";

/*class Casa extends Component {
    render() {
        const {titulo} = this.props
        return (
            <div>
                 <h1>Casa {titulo}</h1>
                 ====================
                 {
                     React.Children.map(
                         this.props.children,
                         (personagem)=>{
                             return React.cloneElement(personagem,{casa:titulo})
                         }
                     )
                 }  
            </div>
        )
    }
}*/

/*class Casa extends Component {
    render() {
        return (
            <div>
                <Personagem nome="Arya" casa="Stark"/>
                <Personagem nome="Robert" casa="Stark"/>
                <Personagem nome="Sansa" casa="Stark"/>
                <Personagem nome="John" casa="Stark"/>
                <Personagem nome="Ned" casa="Stark"/>    
            </div>
        )
    }
}*/

const Casa = (props) => {
    //const {casa} = props
    return (
        <div>
            <h1 style={{color:'red'}}>Casa {props.casa}</h1>
            ====================
            {
                React.Children.map(
                    props.children,
                    (personagem) => {
                        return React.cloneElement(personagem, { ...props })
                    }
                )
            }
        </div>
    )
}

export default Casa
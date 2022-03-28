import React, { Component } from "react";

//import Personagem from "./Personagem";

class Casa extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.show}</h1>
                {
                    React.Children.map(
                        this.props.children,
                        (personagem) => {
                            return React.cloneElement(
                                personagem,
                                { casa:this.props.casa,
                                  horario:this.props.horario }
                            )
                        }
                    )
                }
            </div>
        )
    }
}

/*const Casa = (props) =>
    <div>
        <h1>{props.show}</h1>
        {
            React.Children.map(
                props.children,
                (personagem)=>{
                    return React.cloneElement(
                        personagem,
                        {...props}
                    )
                }
            )
        }
    </div>

*/

export default Casa
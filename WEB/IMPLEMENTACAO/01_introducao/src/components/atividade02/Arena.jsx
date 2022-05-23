import React from "react";

const Arena = ({children,arena}) => {
    //let strArena = 'na arena ' + props.arena
    //const {children,arena} = props
    return (
        <div>
            {
                React.Children.map(
                    children,
                    (filho)=>{
                        return React.cloneElement(filho,{arena})
                    }
                )
            }
        </div>
    )
}

export default Arena
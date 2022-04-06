import React from "react";

const Arena = ({children,arena}) => {
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
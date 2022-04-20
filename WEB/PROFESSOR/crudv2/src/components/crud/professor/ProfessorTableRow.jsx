import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfessorTableRow = (props) => {
    const {id,name,university,degree} = props.professor

    function deleteProfessor(){
        axios.delete(`http://172.18.104.241:3001/professors/${id}`)
        .then(
            response=>{
                console.log(`Registro ${id} Apagado.`)
                props.deleteProfessorById(id)
            }
                
        )
        .catch(error=>console.log(error))
    }

    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editProfessor/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={()=>deleteProfessor()}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow
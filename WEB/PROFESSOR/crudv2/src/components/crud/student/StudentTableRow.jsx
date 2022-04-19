import React from "react";
import { Link } from "react-router-dom";

const StudentTableRow = ({student}) => {
    const {id,name,course,ira} = student
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editStudent/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger">Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow
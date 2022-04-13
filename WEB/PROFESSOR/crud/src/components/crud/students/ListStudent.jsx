import * as React from "react";
import { Link } from "react-router-dom";

import StudentTableRow from "./StudentTableRow";
import { students } from './data.js'

function ListStudent() {

    /*const students = [
        {id:0, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:1, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:2, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:3, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7}
    ]*/

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Student
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListStudent
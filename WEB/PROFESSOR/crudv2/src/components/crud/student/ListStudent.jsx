import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StudentTableRow from "./StudentTableRow";
//import { students } from './data.js'

function ListStudent() {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            axios.get("http://172.18.104.241:3001/students")
                .then(
                    (res) => {
                        setStudents(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        []
    )

    function generateTable() {

        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{ textAlign: "center" }}>Ações</th>
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
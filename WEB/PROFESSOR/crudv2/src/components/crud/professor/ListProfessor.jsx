import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor() {

    const [professors, setProfessors] = useState([])

    function generateTable() {

        if (!professors) return
        return professors.map(
            (professor, i) => {
                return <ProfessorTableRow professor={professor} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
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

export default ListProfessor
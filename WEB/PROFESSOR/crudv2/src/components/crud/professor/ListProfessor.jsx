import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor() {

    const [professors, setProfessors] = useState([])
    useEffect(        
        ()=>{
          axios.get("http://localhost:3001/professors")
          .then(
              (response)=>{
                  //console.log(response.data)
                  setProfessors(response.data)
              }
          )
          .catch(error=>console.log(error))
        },
        []
    )

    function deleteProfessorById(id){
        console.log("delete")
        let professorsTemp = professors
        for(let i=0;i<professorsTemp.length;i++){
            if(professorsTemp[i].id === id)
                professorsTemp.splice(i,1)
        }
        setProfessors(professorsTemp)
    }

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
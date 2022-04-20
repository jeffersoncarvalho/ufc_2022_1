import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor() {

    const [professors, setProfessors] = useState([])
    const prev = useRef()
    useEffect(        
        ()=>{
            if(prev.current === professors) return;
            prev.current = professors
            axios.get("http://172.18.104.241:3001/professors")
            .then(
                (response)=>{
                    //console.log("Resposta")
                    //console.log(response.data)
                    setProfessors(response.data)
                }
            )
            .catch(
                (error)=>console.log(error)
            )
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
                return <ProfessorTableRow professor={professor} key={i} deleteProfessorById={deleteProfessorById}/>
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
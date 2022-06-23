import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import StudentTableRow from "./StudentTableRow";
//import { students } from './data.js'
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictPage from "../../../utils/RestrictPage";

const ListStudentPage = ({ setShowToast, setToast }) =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage isLogged={firebase.getUser() != null}>
                        <ListStudent 
                            firebase={firebase}
                            setShowToast={setShowToast}
                            setToast={setToast} />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>

function ListStudent(props) {

    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            //axios.get("http://localhost:3001/students")
            /*axios.get("http://localhost:3002/crud/students/list")
                .then(
                    (res) => {
                        setStudents(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )*/
            //console.log(props.firebase.getFirestoreDb())
            //FirebaseStudentService.list(
            setLoading(true)
            FirebaseStudentService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (students) => {
                    //console.log(students)
                    setLoading(false)
                    setStudents(students)
                }
            )
        }
        ,
        [props.firebase]
    )

    function deleteStudentById(_id) {
        let studentsTemp = students
        for (let i = 0; i < studentsTemp.length; i++) {
            if (studentsTemp[i]._id === _id) {
                //console.log("1")
                studentsTemp.splice(i, 1)
            }
        }
        setStudents([...studentsTemp]) //deve-se criar um outro array para disparar o re-render
        //setStudents(studentsTemp)
        //setFlag(!flag)
    }

    function renderTable() {

        if (loading) {
            //mostrar um spinner!
            return (
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:100
                }}>
                    <div className="spinner-border" 
                     style={{width: '3rem', height: '3rem'}} 
                     role="status" />
                     Carregando...
                </div>
            )
        }


        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th>Nome</th>
                        <th colSpan={2} style={{ textAlign: "center" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableBody()}
                </tbody>
            </table>
        )
    }

    function renderTableBody() {
        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow
                    student={student}
                    key={i}
                    deleteStudentById={deleteStudentById}
                    firestore={props.firebase.getFirestoreDb()}
                    setShowToast={props.setShowToast}
                    setToast={props.setToast}
                />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                {renderTable()}
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListStudentPage
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import StudentTableRow from "./StudentTableRow";
//import { students } from './data.js'

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictedPage from "../../../utils/RestrictedPage";

const ListStudentPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase) =>
                <RestrictedPage 
                    isLogged={firebase.getUser() != null} 
                    isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}
                    auth={firebase.getAuthentication()}
                    >
                    <ListStudent firebase={firebase} />
                </RestrictedPage>

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
            //firebase
            //console.log(props.firebase.getFirestoreDb())
            //FirebaseStudentService.list(
            setLoading(true)
            FirebaseStudentService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (students) => {
                    //console.log(students)
                    setStudents(students)
                    setLoading(false)
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

    function generateTable() {
        if (loading) {
            //mostrar um spinner
            return (
                <tr>
                    <td colSpan={5}>
                        <div className="text-center">
                            <div className="spinner-border" role="status" style={{width: '5rem', height: '5rem'}}/>
                        </div>
                    </td>
                </tr>

            )
        }

        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow
                    student={student}
                    key={i}
                    deleteStudentById={deleteStudentById}
                    firestore={props.firebase.getFirestoreDb()} />
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
                            <th colSpan={2} style={{ textAlign: "center" }}></th>
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

export default ListStudentPage
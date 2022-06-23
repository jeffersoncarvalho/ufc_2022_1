import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//import axios from "axios";
//import { students } from './data.js'

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictPage from "../../../utils/RestrictPage";

const EditStudentPage = ({ setShowToast, setToast }) =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage isLogged={firebase.getUser() != null}>
                        <EditStudent
                            firebase={firebase}
                            setShowToast={setShowToast}
                            setToast={setToast} />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>

function EditStudent(props) {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)
    const [validate, setValidate] = useState({ name: '', course: '', ira: '' })
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    //https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(
        () => {

            //axios.get('http://localhost:3001/students/' + params.id)
            /*axios.get('http://localhost:3002/crud/students/retrieve/' + params.id)
                .then(
                    (res) => {
                        setName(res.data.name)
                        setCourse(res.data.course)
                        setIRA(res.data.ira)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
            */
            FirebaseStudentService.retrieve(
                props.firebase.getFirestoreDb(),
                (student) => {
                    setName(student.name)
                    setCourse(student.course)
                    setIRA(student.ira)
                },
                params.id
            )

        }
        ,
        [params.id, props.firebase]
    )

    const validateFields = () => {
        let res = true
        setValidate({ name: '', course: '', ira: '' })

        if (name === '' || course === '' || ira === '') {
            props.setToast({ header: 'Erro!', body: 'Preencha todos os campos.' })
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = { name: '', course: '', ira: '' }
            if (name === '') validateObj.name = 'is-invalid'
            if (course === '') validateObj.course = 'is-invalid'
            if (ira === '') validateObj.ira = 'is-invalid'
            console.log(course)
            setValidate(validateObj)
        }

        if (ira !== '' && (ira < 0 || ira > 10)) {
            props.setToast({ header: 'Erro!', body: 'O IRA deve ser um valor entre 0 e 10!' })
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = { name: '', course: '', ira: '' }
            validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }


        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const updatedStudent =
        {
            name, course, ira
        }
        //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)
        /*axios.put('http://localhost:3002/crud/students/update/' + params.id, updatedStudent)
            .then(
                res => {
                    //console.log(res.data)
                    //props.history.push('/listStudent');
                    //console.log(props)
                    navigate("/listStudent")
                }
            )
            .catch(error => console.log(error))
        */
        FirebaseStudentService.update(
            props.firebase.getFirestoreDb(),
            () => {
                navigate("/listStudent")
            },
            params.id,
            updatedStudent)
    }

    const renderSubmitButton = () => {
        if (loading) {
            return (
                <div style={{ paddingTop: 20 }}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span style={{ marginLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        }
        return (
            <>
                <div className="form-group" style={{ paddingTop: 20 }}>
                    <input type="submit" value="Efetuar Edição" className="btn btn-primary" />
                </div>
            </>
        )
    }

    return (
        <>
            <main>
                <h2>
                    Editar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className={`form-control ${validate.name}`}
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className={`form-control ${validate.course}`}
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className={`form-control ${validate.ira}`}
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => { setIRA(event.target.value) }} />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditStudentPage
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { students } from './data.js'

function EditStudent() {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)
    const params = useParams()

    //https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(
        () => {
            
            //console.log(params.id)
            const student = students[params.id]
            //console.log(student)
            setName(student.name)
            setCourse(student.course)
            setIRA(student.ira)
        }
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(course)
        console.log(ira)
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
                            className="form-control"
                            value={(name == null || name == undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className="form-control"
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => { setIRA(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Estudante" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditStudent
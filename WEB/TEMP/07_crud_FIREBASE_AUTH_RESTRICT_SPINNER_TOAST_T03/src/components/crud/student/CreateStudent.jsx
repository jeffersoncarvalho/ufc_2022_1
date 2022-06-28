import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictedPage from "../../../utils/RestrictedPage";

const CreateStudentPage = (props) =>
<FirebaseContext.Consumer>
    {
        (firebase)=>
            <RestrictedPage isLogged={firebase.getUser()!=null}>
                <CreateStudent 
                    firebase={firebase}
                    setToast={props.setToast}
                    setShowToast={props.setShowToast}/>
            </RestrictedPage>
        
    }
</FirebaseContext.Consumer>

function CreateStudent(props) {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)

    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({name:'',course:'',ira:''})
    
    const navigate = useNavigate()

    const validateFields = ()=> {
        let res = true
        setValidate({name:'',course:'',ira:''})
        if(name === '' || course === '' || ira === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',course:'',ira:''}
            if (name === '') validateObj.name = 'is-invalid'
            if (course === '') validateObj.course = 'is-invalid'
            if (ira === '') validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }

        if(ira !== '' && (ira < 0 || ira > 10)){
            props.setToast({header:'Erro!',body:'O IRA deve ser um valor entre 0 e 10!'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',course:'',ira:''}
            validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const newStudent = { name, course, ira }
        //axios.post('http://localhost:3001/students', newStudent)
        /*axios.post('http://localhost:3002/crud/students/create', newStudent)
            .then(
                (res) => {
                    console.log(res.data._id)
                    alert(`Aluno ${name} criado com sucesso.`)
                    navigate("/listStudent")
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        */
       FirebaseStudentService.create(
           props.firebase.getFirestoreDb(),
           (_id)=>{
            //console.log(res.data._id)
            if(_id!=null){
                //alert(`Aluno ${name} criado com sucesso com id ${_id}.`)
                props.setToast({header:'Sucesso!',body:`Aluno ${name} criado com sucesso com id ${_id}.`})
                props.setShowToast(true)
                setLoading(false)
                navigate("/listStudent")
            }else{
                props.setToast({header:'Erro!',body:`Não foi possível criar o estudante ${name}!`})
                props.setShowToast(true)
                setLoading(false)
            }
           },
           newStudent
       )

    }

    const renderSubmitButton = () => {
        if (loading)
            return (
                <div className="form-group" style={{ paddingTop: 20 }}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span style={{ paddingLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        return (
            <div className="form-group" style={{ paddingTop: 20 }}>
                <input type="submit" value="Cria Estudante" className="btn btn-primary" />
            </div>
        )
    }

    return (
        <>
            <main>
                <h2>
                    Criar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome* </label>
                        <input type="text"
                            className={`form-control ${validate.name}`}
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso* </label>
                        <input type="text"
                            className={`form-control ${validate.course}`}
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA* </label>
                        <input type="number"
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

export default CreateStudentPage
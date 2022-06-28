import React, { useState } from "react";
//import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const SignupPage = ({setLogged,setShowToast,setToast}) =>
    <FirebaseContext.Consumer>
        {(firebase) => <Signup 
                            firebase={firebase} 
                            setLogged={setLogged} 
                            setShowToast={setShowToast}
                            setToast={setToast}/>}
    </FirebaseContext.Consumer>

function Signup({firebase,setLogged,setShowToast,setToast}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({login:'',password:'',repassword:''})

    const navigate = useNavigate()

    const validateFields = () => {
        let res = true //os campos estão ok!
        setValidate({login:'',password:''})
        if(login === '' || password === ''){
            res = false

            setToast({header:'Atenção!',body:'Preencha todas os campos',bg:'warning'})
            setShowToast(true)
            
            let validateObj = {login:'',password:''}
            if(login === '') validateObj.login = 'is-invalid'
            if(password === '') validateObj.password = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //if(!validateFields()) return
        setLoading(true)

        //console.log(login)
        //console.log(password)
        FirebaseUserService.signup(
            firebase.getAuthentication(),
            login,
            password,
            (res,content) => {
                if (res) {
                    //console.log(user.email)
                    setLoading(false)
                    firebase.setUser(content)
                    setLogged(true)
                    navigate('/listStudent')
                } else {
                    //alert('Usuário e/ou senha incorretos!')
                    setLoading(false)
                    setToast({header:'Erro!',body:content,bg:'danger'})
                    setShowToast(true)
                }
            }
        )
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
                    <input type="submit" value="Efetuar Login" className="btn btn-primary" />
                </div>
            </>
        )
    }

    

    return (
        <div className="content-login" style={{ marginTop: 50 }}>
            
            <main style={{ width: '40%' }}>
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login* </label>
                        <input type="text"
                            className={`form-control ${validate.login}`}
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Senha* </label>
                        <input type="password"
                            className={`form-control ${validate.password}`}
                            value={password ?? ""}
                            name="password"
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Repita a Senha* </label>
                        <input type="password"
                            className={`form-control ${validate.repassword}`}
                            value={repassword ?? ""}
                            name="repassword"
                            onChange={(event) => { setRepassword(event.target.value) }} />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default SignupPage
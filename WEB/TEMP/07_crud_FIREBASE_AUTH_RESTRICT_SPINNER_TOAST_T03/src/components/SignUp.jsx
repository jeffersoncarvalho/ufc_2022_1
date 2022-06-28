import React, { useState } from "react";
//import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const SignUpPage = (props) =>
    <FirebaseContext.Consumer>
        {(firebase) => <SignUp 
                            firebase={firebase} 
                            setLogged={props.setLogged} 
                            setToast={props.setToast}
                            setShowToast={props.setShowToast}
                            />}
    </FirebaseContext.Consumer>

function SignUp(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({login:'',password:'',repassword:''})

    //const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate()

    const validateFields = ()=> {
        let res = true
        setValidate({login:'',password:''})
        if(login === '' || password === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {login:'',password:''}
            if (login === '') validateObj.login = 'is-invalid'
            if (password === '') validateObj.password = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        //if(!validateFields()) return
        FirebaseUserService.signup(
            props.firebase.getAuthentication(),
            login,
            password,
            (res,content)=>{
                if(res){
                    setLoading(false)
                    props.firebase.setUser(content)
                    props.setLogged(true)
                    navigate('/listStudent')
                }else{
                    props.setToast({header:'Erro!',body:content})
                    props.setShowToast(true)
                    setLoading(false)
                }

            }
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
                <input type="submit" value="Efetuar Cadastro" className="btn btn-primary" />
            </div>
        )
    }

    return (
        <div className="container-login" style={{ marginTop: 40 }}>
            
            <main style={{ width: '40%' }}>
                <h2>Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login* </label>
                        <input type="text"
                            className={`form-control ${validate.login}`}
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} 
                            />
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

export default SignUpPage
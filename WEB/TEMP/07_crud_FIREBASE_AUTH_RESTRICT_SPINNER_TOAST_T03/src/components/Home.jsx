import React, { useState } from "react";
//import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const HomePage = (props) =>
    <FirebaseContext.Consumer>
        {(firebase) => <Home 
                            firebase={firebase} 
                            setLogged={props.setLogged} 
                            setToast={props.setToast}
                            setShowToast={props.setShowToast}
                            />}
    </FirebaseContext.Consumer>

function Home(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({login:'',password:''})
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
        if(!validateFields()) return
        //const user = { login, password }
        //console.log(user)
        FirebaseUserService.login(
            props.firebase.getAuthentication(),
            login,
            password,
            (user) => {
                if (user != null) {
                    //console.log(user.email)
                    props.firebase.setUser(user)
                    props.setLogged(true)
                    navigate('/listStudent')
                } else {
                    props.setToast({header:'Erro!',body:'Login e/ou Senha incorreto(s).'})
                    props.setShowToast(true) //mostre o toast!
                    setLoading(false)

                }

            }
        )
    }

    /*const renderToast = () => {
        return (
            <ToastContainer className="p-3" position='top-center'>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Erro!</strong>
                    </Toast.Header>
                    <Toast.Body>Usuário e/ou Senha incorreto(s)!</Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }*/

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
                <input type="submit" value="Efetuar Login" className="btn btn-primary" />
            </div>
        )
    }

    return (
        <div className="container-login" style={{ marginTop: 40 }}>
            
            <main style={{ width: '40%' }}>
                <h2>Login</h2>
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
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <nav>
                <Link to="/signup">Cadastre-se</Link>
            </nav>
        </div>
    );
}

export default HomePage
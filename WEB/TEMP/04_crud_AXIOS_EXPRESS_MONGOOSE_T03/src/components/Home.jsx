import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const HomePage = (props) =>
    <FirebaseContext.Consumer>
        {(firebase) => <Home firebase={firebase} setLogged={props.setLogged} />}
    </FirebaseContext.Consumer>

function Home(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
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
                    setShowToast(true)
                    setLoading(false)

                }

            }
        )
    }

    const renderToast = () => {
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
                <input type="submit" value="Efetuar Login" className="btn btn-primary" />
            </div>
        )
    }

    return (
        <div className="container-login" style={{ marginTop: 40 }}>
            {renderToast()}
            <main style={{ width: '40%' }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login: </label>
                        <input type="text"
                            className="form-control"
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input type="text"
                            className="form-control"
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
        </div>
    );
}

export default HomePage
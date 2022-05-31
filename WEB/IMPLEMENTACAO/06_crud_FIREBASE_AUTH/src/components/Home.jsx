import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FirebaseContext from "../utils/FirebaseContext";
import FirebaseUserService from "../services/FirebaseUserService";

const HomePage = (props) => 
<FirebaseContext.Consumer>
    {firebase=><Home firebase={firebase} setUserLogged={props.setUserLogged}/>}
</FirebaseContext.Consumer>

function Home(props) {

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {

        event.preventDefault()
        const user = {login,password} 
        console.log(login)
        console.log(password)
        //console.log(props.firebase.getAuthentication())
        FirebaseUserService.login(
            props.firebase.getAuthentication(),
            login,
            password,
            (user)=>{
                //console.log(user)
                props.firebase.setAuthenticatedUser(user)
                localStorage.setItem('user',JSON.stringify(user))
                props.setUserLogged(true)
                navigate("/listStudent")
            }
        )
    }

    return (
        <div className="content">
            <main style={{width:'30%',margin:100}}>
                <h2>Login Page</h2>
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
                        <input type="password"
                            className="form-control"
                            value={password ?? ""}
                            name="password"
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Submeter" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default HomePage
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const HomePage = (props) => 
<FirebaseContext.Consumer>
    {(firebase)=><Home firebase={firebase} setLogged={props.setLogged}/>}
</FirebaseContext.Consumer>

function Home(props) {

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(login)
        //console.log(password)
        FirebaseUserService.login(
            props.firebase.getAuthentication(),
            login,
            password,
            (user)=>{
                //console.log(user.email)
                props.firebase.setUser(user)
                props.setLogged(true)
                navigate('/listStudent')
            }
        )
    }

    return (
        <div className="content-login" style={{marginTop:50}}>
            <main style={{width:'40%'}}>
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
                        <input type="password"
                            className="form-control"
                            value={password ?? ""}
                            name="password"
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Efetuar Login" className="btn btn-primary" />
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
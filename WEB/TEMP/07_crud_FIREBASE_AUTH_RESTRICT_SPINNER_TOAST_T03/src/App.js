import React, {useState} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";

import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";

import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";

import FirebaseContext from "./utils/FirebaseContext";
import FirebaseUserService from "./services/FirebaseUserService";

import MyToast from "./utils/MyToast";

const AppPage = () =>
  <FirebaseContext.Consumer>
    {(firebase) => <App firebase={firebase} />}
  </FirebaseContext.Consumer>

function App(props) {

  const [logged,setLogged] = useState(false)
  const [showToast, setShowToast] = useState(false); //TOAST
  const [toast,setToast] = useState({header:'',body:''})

  const navigate = useNavigate()

  const renderUserLogoutButton = () => {
    if (props.firebase.getUser() != null)
      return (
        <div style={{ marginRight: 20 }}>
          Olá, {props.firebase.getUser().email}
          <button style={{ marginLeft: 10 }} onClick={()=>logout()} >Logout</button>
        </div>
      )
    return
  }

  const renderToast = ()=> {
    return <MyToast
      show = {showToast}
      header = {toast.header}
      body = {toast.body}
      setShowToast = {setShowToast}
      bg = 'secondary'
    />
  }

  const logout = () => {
    if (props.firebase.getUser() != null){
      FirebaseUserService.logout(
        props.firebase.getAuthentication(),
        (res)=>{
          if(res){
            props.firebase.setUser(null)
            setLogged(false)
            navigate('/')
          }
        }
      )
    }
  }

  return (
    <div className="container">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="navitem">
                  <Link to="/createStudent" className="nav-link">Criar Estudante</Link>
                </li>
                <li className="navitem">
                  <Link to="/listStudent" className="nav-link">Listar Estudante</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="navitem">
                  <Link to="/createProfessor" className="nav-link">Criar Professor</Link>
                </li>
                <li className="navitem">
                  <Link to="/listProfessor" className="nav-link">Listar Professor</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {renderUserLogoutButton()}
        {renderToast()}
      </nav>
      <Routes>
        <Route path="/" element={<Home setLogged={setLogged} setToast={setToast} setShowToast={setShowToast}/>} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<SignUp setLogged={setLogged} setToast={setToast} setShowToast={setShowToast}/>} />
        

        <Route path="createStudent" element={<CreateStudent setToast={setToast} setShowToast={setShowToast}/>} />
        <Route path="listStudent" element={<ListStudent setToast={setToast} setShowToast={setShowToast}/>} />
        <Route path="editStudent/:id" element={<EditStudent setToast={setToast} setShowToast={setShowToast}/>} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>

  );
}

export default AppPage
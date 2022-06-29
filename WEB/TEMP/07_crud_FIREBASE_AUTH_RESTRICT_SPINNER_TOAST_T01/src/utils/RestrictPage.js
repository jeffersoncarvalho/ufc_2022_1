import { Link } from "react-router-dom";
import FirebaseUserService from "../services/FirebaseUserService";

const RestrictPage = ({isLogged,children,isEmailVerified,auth}) => {

    const sendEmail = () => {
        FirebaseUserService.sendEmail(
            auth,
            (res,content)=>{
                if(res){
                    alert(`Email enviado com sucesso para ${auth.currentUser.email}`)
                }
            })
    }

    if (isLogged && isEmailVerified)
        return children
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%'
        }}>
            <h3>Acesso restrito, faça o seu login.</h3>
            <h4>Verifique e-mail de autorização.</h4>
            <Link to="/" className="nav-link">Home</Link>
            <button onClick={()=>sendEmail()}>Reenviar e-mail</button>
        </div>
    )
}

export default RestrictPage
import { Link } from "react-router-dom"
import FirebaseUserService from "../services/FirebaseUserService"

const RestrictedPage = ({ isLogged, children, isEmailVerified, auth }) => {

    const sendEmail = () => {
        if (auth != null) {
            FirebaseUserService.sendEmail(
                auth,
                (res) => {
                    if(res) alert(`E-mail enviado com sucesso para ${auth.currentUser.email}!`)
                }
            )
        }
    }

    if (isLogged && isEmailVerified) {
        return children
    }
    //referente caso o user seja nulo
    let msg = 'Acesso restrito. Por favor, faça o login.'
    if (!isEmailVerified) msg += 'Verifique sua caixa de e-mail.'
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px'
        }}
        >
            <h3>{msg}</h3>
            <Link to="/" className="nav-link">Efetuar Login</Link>
            <button onClick={()=>sendEmail()}>Reenviar e-mail</button>
        </div>
    )


}

export default RestrictedPage
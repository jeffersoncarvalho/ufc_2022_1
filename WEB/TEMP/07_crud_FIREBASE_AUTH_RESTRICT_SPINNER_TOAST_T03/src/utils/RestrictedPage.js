import { Link } from "react-router-dom"

const RestrictedPage = ({isLogged,children}) => {
    if (isLogged) {
        return children
    }
    //referente caso o user seja nulo
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px'
        }}
        >
            <h3>Acesso restrito. Por favor, faça o login.</h3>
            <Link to="/" className="nav-link">Efetuar Login</Link>
        </div>
    )
}

export default RestrictedPage
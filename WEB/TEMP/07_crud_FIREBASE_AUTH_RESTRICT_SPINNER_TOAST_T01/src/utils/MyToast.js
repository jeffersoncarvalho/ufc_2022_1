import { Toast, ToastContainer } from "react-bootstrap"

const MyToast = (props) => {
    return (
        <ToastContainer position="top-center" style={{ marginTop: 10 }}>
            <Toast onClose={()=>props.setShowToast(false)} show={props.show}  bg={props.bg} delay={4000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{props.header}</strong>
                </Toast.Header>
                <Toast.Body>
                    <span style={{color:'white',fontWeight:'bold'}}>{props.body}</span>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default MyToast
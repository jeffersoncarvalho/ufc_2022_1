import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default class FirebaseUserService {

    static sendEmail = (auth,callback) => {
        sendEmailVerification(auth.currentUser)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
                callback(false,error.code)
            }
        )

    }

    static signup = (auth,login,password,callback) => {

        createUserWithEmailAndPassword(auth,login,password)
        .then(
            (userCredential)=>{

                sendEmailVerification(auth.currentUser)
                .then(
                    ()=>{
                        callback(true,userCredential.user)
                    }
                )
                .catch(
                    (error)=>{
                        console.log(error)
                        callback(false,error.code)
                    }
                )
                //callback(true,userCredential.user)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
                callback(false,error.code)
            }
        )
    }

    static login = (auth,login,password,callback) => {
        signInWithEmailAndPassword(auth,login,password)
        .then(
            (userCredential)=>{
                callback(userCredential.user)
            }
        )
        .catch(error => {console.log(error);callback(null)})
    }

    static logout = (auth,callback) => {
        signOut(auth)
        .then(()=>callback(true))
        .catch(error=>{console.log(error);callback(false)})
    }
}
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default class FirebaseUserService {

    static login = (auth,email,password,callback) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(
            (userCredential)=>{
                //console.log(userCredential.user)
                callback(userCredential.user)
            }
        )
        .catch(error=>console.log(error))
    }

    static logout = (auth,callback) => {
        signOut(auth)
        .then(
            ()=>callback(true)
        )
        .catch((error)=>{console.log(error);callback(false)})
    }
}
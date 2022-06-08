import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default class FirebaseUserService {

    static login = (auth,login,password,callback) => {
        signInWithEmailAndPassword(
            auth,
            login,
            password
        )
        .then(
            (userCredential)=>{
                callback(userCredential.user)
            }
        )
        .catch(error=>{callback(null);console.log(error)})
    }

    static logout = (auth,callback) => {
        signOut(auth)
        .then(()=>{callback(true)})
        .catch(error=>{callback(false);console.log(error)})
    }
}
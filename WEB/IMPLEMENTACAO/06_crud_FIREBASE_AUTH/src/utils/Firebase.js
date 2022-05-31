import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth"

import {firebaseConfig} from '../keys/firebase_key'

export default class Firebase{
    constructor(){
        this.app = initializeApp(firebaseConfig)
        this.user = null
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }
    
    getAuthentication(){
        return getAuth(this.app)
    }

    getAuthenticatedUser(){
        return this.user
    }
    
    setAuthenticatedUser(user){
        this.user = user
    }
}
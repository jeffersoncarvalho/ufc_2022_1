import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import {firebaseConfig} from '../keys/firebase_key'

export default class Firebase {
    constructor(){
        this.app = initializeApp(firebaseConfig)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }

    getAuthentication(){
        //futuramente usando o this.app
    }
}
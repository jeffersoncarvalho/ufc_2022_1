import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";

export default class FirebaseStudentService {

    static list = (firestore,callback)=>{
        const coll = collection(firestore,'student')
        getDocs(coll)
        .then(
            (querySnapshot)=>{
                let students = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data());
                        students.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                course:document.data().course,
                                ira:document.data().ira   
                            }
                        )
                    }
                )//forEach
                callback(students) //mensagem para o pai ListStudent
            }//querySnapshot
        )
        .catch(error=>console.log(error))
    }

    static list_onSnapshot = (firestore,callback)=>{
        const coll = collection(firestore,'student')
        const q = query(coll,orderBy('name'))
        onSnapshot(
            q,
            (querySnapshot)=>{
                let students = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data());
                        students.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                course:document.data().course,
                                ira:document.data().ira   
                            }
                        )
                    }
                )//forEach
                callback(students) //mensagem para o pai ListStudent
            }
        )
    }

    static retrieve = (firestore,callback,_id)=>{
        const docRef = doc(firestore,'student',_id)
        getDoc(docRef)
        .then(
            (docSnapshot)=>{
                if (docSnapshot.exists()) callback(docSnapshot.data())
            }
        )
        .catch(error=>console.log(error))
    }

    static update = (firestore,callback,_id,student)=>{
        const docRef = doc(firestore,'student',_id)
        updateDoc(docRef,student)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))

    }

    static create = (firestore,callback,student)=>{
        const coll = collection(firestore,'student')
        addDoc(coll,student)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>{console.log(error);callback(null)})
        //console.log('ok, terminei')
    }

    static delete = (firestore,callback,_id) => {
        const docRef = doc(firestore,'student',_id)
        deleteDoc(docRef)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }
}
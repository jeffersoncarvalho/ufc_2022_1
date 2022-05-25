import { collection, documentId, getDocs, onSnapshot, query } from "firebase/firestore";

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
        const q = query(coll)
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

    static update = ()=>{

    }

    static create = ()=>{

    }
}
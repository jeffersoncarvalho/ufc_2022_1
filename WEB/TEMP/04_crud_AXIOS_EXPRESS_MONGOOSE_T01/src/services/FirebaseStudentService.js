import { collection, getDocs, onSnapshot, query } from 'firebase/firestore'




export default class FirebaseStudentService {

    static list = (firestore,callback) => {
        getDocs(collection(firestore,'student'))
        .then(
            (querySnapshot)=>{
                //callback('Deu certo!')
                let students = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data())
                        students.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                course:document.data().course,
                                ira:document.data().ira
                            }
                        )
                    }
                )
                callback(students)
            }
        )
        .catch(error=>console.log(error))
    }

    static list_onSnapshot = (firestore,callback) => {
        const q = query(collection(firestore,'student')) 
        onSnapshot(
            q,
            (querySnapshot)=>{
                let students = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data())
                        students.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                course:document.data().course,
                                ira:document.data().ira
                            }
                        )
                    }
                )
                callback(students)
            }
        )
    }
}

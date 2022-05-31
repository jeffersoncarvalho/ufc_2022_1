import { collection, getDocs, onSnapshot, query, addDoc, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

export default class FirebaseService {
    static unscribe = null

    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'student'))
            .then((querySnapshot) => {
                let students = []
                querySnapshot.forEach(
                    (doc) => {
                        const { name, course, ira } = doc.data()
                        students.push({ _id: doc.id, name, course, ira })
                    }
                )
                callback(students)
            })
            .catch((error) => console.log(error))
    }

    static list_onSnapshot(firestore, callback) {

        const q = query(collection(firestore, 'student'))
        FirebaseService.unscribe = onSnapshot(
            q,
            (querySnapshot) => {
                let students = []
                querySnapshot.forEach(
                    (doc) => {
                        const { name, course, ira } = doc.data()
                        students.push({ _id: doc.id, name, course, ira })
                    }
                )
                callback(students)
            })
    }

    static create = (firestore, callback, data) => {
        addDoc(collection(firestore, 'student'), data)
            .then(
                (doc) => {
                    console.log("CREATE:" + doc.id)
                    callback()
                }
            )
            .catch((error) => console.log(error))
    }


    static retrieve = async(firestore, callback, _id) => {

        const docRef = doc(firestore, "student", _id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            callback(docSnap.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        
    }

    static retrieve_promisse = (firestore, callback, _id) => {
        const docRef = doc(firestore, "student", _id);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists) callback(docSnap.data())
        })
        .catch(error=>console.log(error))
    }

    static update = (firestore,callback,_id,body) => {
        const docRef = doc(firestore, "student", _id);
        updateDoc(docRef,body)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }
    
    static delete = (firestore,callback,_id) => {
        const docRef = doc(firestore, "student", _id);
        deleteDoc(docRef)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }

}
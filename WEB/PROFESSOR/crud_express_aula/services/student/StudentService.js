const StudentModel = require('../../models/student/StudentModel')

let students = [
    {_id:0,name:'Jefferson',course:'Sistemas de Informação',ira:7.5},
    {_id:1,name:'Wladimir',course:'Design Digital',ira:5.8},
    {_id:2,name:'Aragão',course:'Matemática Industrial',ira:9.5}
]

let _id = 3

class StudentService {
    static list() {
        return students
    }
}

module.exports = StudentService
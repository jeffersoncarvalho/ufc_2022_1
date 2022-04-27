const StudentModel = require('../../models/student/StudentModel')

let students = [
    { _id: 0, name: 'Jefferson', course: 'Sistemas de Informação', ira: 7.5 },
    { _id: 1, name: 'Wladimir', course: 'Design Digital', ira: 5.8 },
    { _id: 2, name: 'Aragão', course: 'Matemática Industrial', ira: 9.5 }
]

let _id = 3

class StudentService {

    static create(data) {
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira);
        students.push(student);
        return student;
    }

    static update(_id, data) {
        for (let s of students) {
            if (s._id == _id) {
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }
        return null;
    }

    static delete(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1);
                return true;
            }
        }
        return s;
    }

    static retrieve(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }
        return {};
    }

    static list() {
        return students
    }
}
       

   


module.exports = StudentService
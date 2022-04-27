const StudentModel = require('../../models/student/StudentModel')

let students = [
    { _id: 0, name: "Jefferson", course: "SI", ira: 4.5 },
    { _id: 1, name: "Wladimir", course: "DD", ira: 7.8 },
    { _id: 2, name: "Aragão", course: "Matemática", ira: 6.3 }
]
let _id = 3

class StudentService {

    static list() {
        return students
    }

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
        return false;
    }

    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }
        return {};
    }


}

module.exports = StudentService
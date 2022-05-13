const StudentModel = require("../../models/student/student.model")

class StudentService {

    static create(req, res) {
        StudentModel.create(req.body)
            .then(
                (student) => {
                    res.status(201).json(student);
                }
            );
    }

    static retrieve(req, res) {
        StudentModel.findById(req.params.id)
        .then(
            (student) => {
                res.status(200).json(student);
            }
        );
    }

    static update(req, res) {
        StudentModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
            .then(
                (student) => {
                    res.status(200).json(student);
                }
            );
    }

    static delete(req, res) {
        StudentModel.findByIdAndRemove(req.params.id)
            .then(
                (student) => {
                    res.status(200).json(student);
                }
            );
    }

    //retorna um vetor de students
    static list(req, res) {
        StudentModel.find()
            .then(
                (students) => {
                    res.status(200).json(students);
                }
            );
    }

}

module.exports = StudentService
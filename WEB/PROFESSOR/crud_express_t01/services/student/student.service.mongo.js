const StudentModel = require("../../models/student/student.model")

class StudentService {
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
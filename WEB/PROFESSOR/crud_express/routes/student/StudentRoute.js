var express = require('express')
var router = express.Router()
var studentService = require('../../services/student/StudentService')

router.post('/create', function (req, res, next) {
    const student = studentService.create(req.body)
    return res.json(student)
});

router.get('/retrieve/:id', function (req, res, next) {
    const student = studentService.retrieve(req.params.id)
    return res.json(student)
});

router.put('/update/:id', function (req, res, next) {
    const student = studentService.update(req.params.id, req.body)
    return res.json(student)
});

router.delete('/delete/:id', function (req, res, next) {
    const ok = studentService.delete(req.params.id)
    if (ok) return res.json({ "sucess": true })
    else return res.json({ "sucess": false })
});

router.get('/list', function (req, res, next) {
    return res.json(studentService.list())
})

module.exports = router

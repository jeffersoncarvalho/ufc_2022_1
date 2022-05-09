var express = require('express');
var router = express.Router();
var studentService = require('../../services/student/student.service');

router.get('/list', function (req, res, next) {
    studentService.list(req, res);
});

module.exports = router
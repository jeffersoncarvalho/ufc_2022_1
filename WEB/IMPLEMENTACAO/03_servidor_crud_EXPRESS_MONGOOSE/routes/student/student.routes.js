var express = require('express');
var router = express.Router();
var studentService = require('../../services/student/student.service');

router.get('/list', 
    function (req, res, next) {
        studentService.list(req, res);
    }
);

router.post('/create', 
    function (req, res, next) {
        studentService.create(req, res);
    }
);

router.put('/update/:id', 
    function (req, res, next) {
        studentService.update(req, res);
    }
);

router.delete('/delete/:id', 
    function (req, res, next) {
        studentService.delete(req, res);
    }
);

router.get('/retrieve/:id', 
    function (req, res, next) {
        studentService.retrieve(req,res)
    }
);

module.exports = router
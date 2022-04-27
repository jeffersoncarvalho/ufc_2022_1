var express = require('express');
var router = express.Router();
var StudentService = require('../../services/student/StudentService');

router.get(
    '/list',
    function(req,res,next){
        return res.json(StudentService.list())
    }
)

module.exports = router
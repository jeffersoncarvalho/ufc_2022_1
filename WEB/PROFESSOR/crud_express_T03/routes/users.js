var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/listUsers', function(req, res, next) {
  res.json({
      users: 
      [
        {name: 'Timmy'},
        {name: 'Peter'},
        {name: 'John'},
        {name: 'May'},
        {name: 'Mary'}
      ]
    });
});

/* GET users listing. */
router.get('/listUsersAgain', function(req, res, next) {
  res.json({
      users: 
      [
        {name: 'Timmy'},
        {name: 'John'},
        {name: 'May'}
      ]
    });
});

module.exports = router;

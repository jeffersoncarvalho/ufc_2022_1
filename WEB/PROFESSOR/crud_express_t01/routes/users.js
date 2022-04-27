var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(
  '/listUsers',
  function (req, res, next) {
    res.json(
      { 
        users: [
          { name: 'Timmy' },
          { name: 'Peter' },
          { name: 'Mary' }
        ] 
      });
  }
);

router.get(
  '/listUsersAgain',
  function (req, res, next) {
    res.json(
      { 
        users: [
          { name: 'Timmy' },
          { name: 'Mary' }
        ] 
      });
  }
);

module.exports = router;

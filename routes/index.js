var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var htmlhello ="<html> <body> <p> hello world </p> </body> </html>"
  res.render(htmlhello);
});

module.exports = router;

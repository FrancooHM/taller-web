var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/example', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send({
    data: 'fetch("http://138.68.3.211:3000/example", { method: "get" }).then(function(response) { return response.json(); }).then(function(responseJson) { console.debug("responseJson: " + responseJson.data); let element = document.getElementById("content"); element.innerHTML = responseJson.data; });'
  });
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;

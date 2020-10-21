var express = require('express');
var router = express.Router();
var connection = require('s')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('regsister', { title: 'Regsister' });
});


router.post('/', function(req, res, next) {
  var TXT_NAME= req.body.fullname;
  var TXT_MAIL= req.body.email;
  var TXT_PHONE = req.body.phoneNo;
  var TXT_PASSWORD = req.body.password;

  connection.connect()
  let post = {TXT_NAME:req.body.fullname, TXT_MAIL: req.body.email,TXT_PHONE:req.body.phoneNo, TXT_PASSWORD:req.body.password};
  let sql =" insert into USER_TBL Set ?";

  connection.query(sql,post,err => {

    if(err)
    throw err;
    res.send("Signed up")
  })
});


module.exports = router;

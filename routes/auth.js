var express = require('express');
var router = express.Router();

    router.post('/', function(req, res) {

		var email="sanahamed192013@gmail.com";
		var pass="123456";

        var username = req.body.username;
        var password = req.body.password;
        
        if (username==email && password==pass) {

			// Store authentication token
	
			res.redirect('/profile');
			
		}
		else{
			res.send('Incorrect Username and/or Password!');	
       		res.end();}
    
    });
	
   
	// const crypto = require('crypto');

	// const getHashedPassword = (password) => {
	// 	const sha256 = crypto.createHash('sha256');
	// 	const hash = sha256.update(password).digest('base64');
	// 	return hash;
	// }
    // var username = request.body.username;
	// var password = request.body.password;
	// if (username && password) {
	//	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// if (results.length > 0) {
			// 	req.session.loggedin = true;
			// 	req.session.username = username;
			//	res.redirect('/profile');
			// } else {
			// 	res.send('Incorrect Username and/or Password!');
      // }		
		//	res.end();
		
	// } else {
	// 	res.send('Please enter Username and Password!');
	// 	res.end();
	// }
      
module.exports = router;

var express = require('express'),
  bodyParser = require('body-parser'), 
 app = express();

var names = [];

app.route('/')
  .get(function(req, res){
    // res.send("Hello world");
   res.render('index.jade', { names: names});
 })
.post(function(req, res){
 	names.push(req.body.name);
    res.redirect('/');
});



app.listen(3000, function(){
	console.log("Listening on port 3000...")
});
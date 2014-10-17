var express = require('express'),
  bodyParser = require('body-parser'), 
 app = express();

app.use(bodyParser.urlencoded());

function log(req, res, next){
	console.log(names);
	next();
}
 var names = [];

app.all('/', log);

app.get('/', function(req, res){
    // res.send("Hello world");
   res.render('index.jade', { names: names});
 });

app.post('/', function(req, res){
 	names.push(req.body.name);
    res.redirect('/');
});


app.listen(3000, function(){
	console.log("Listening on port 3000...")
});
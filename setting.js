var express = require('express'),
  bodyParser = require('body-parser'), 
 app = express();

// settings
app.set('env', 'development'); // process.env.NODE_ENV = 'production'
app.enable('trust proxy');
app.set('jsonp callback name', 'cb');
app.set('json replacer', function(attr, val){
	if (attr === 'passwordHash'){
		return undefined;
	}
	return val.toUppercase();
});

 app.get('/user_info', function(req, res){
  // get user data
  res.json(user);  // JSON.stringify
 });

app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('view cache');
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('index', {
    	title: "Hello Express & Jade "                  
    });
});


app.listen(3000);
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	console.log('connected...')
  // Create your schemas and models here.
var userSchema = mongoose.Schema({
	name: String,
	email: String 
  });

var User = mongoose.model('User', userSchema);

var person = new User({ 
	name:'tony',  email:'tony1@gmail.com'
});
console.log(person.name);
});

mongoose.connect('mongodb://localhost/test');
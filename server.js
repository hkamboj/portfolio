var express = require('./routes/users');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
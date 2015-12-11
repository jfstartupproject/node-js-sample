var express = require('express')
var app = express()
var buf = new Buffer(1000)

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  buf = fs.readFileSync('./index.html');
  response.end(buf.toString());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

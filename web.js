var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
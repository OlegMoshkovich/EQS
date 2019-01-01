var express = require('express');
var app = express();

// app.use(express.static(path.join(__dirname)));
app.use(express.static('public'));
// app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
// app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});


app.listen(process.env.PORT || 8080);

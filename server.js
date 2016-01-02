var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 3000;    

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.get("", function (req, res) {
  res.redirect("index.html");
});

//var routeHandler = require("./routes");

console.log("Simple static server listening at http://localhost:" + port);
app.listen(port);